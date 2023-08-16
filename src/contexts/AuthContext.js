import { createContext, useReducer, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const initialToken = localStorage.getItem("token") || "";

const initialUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;
const initialState = { encodedToken: initialToken };

const authReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return { ...state, encodedToken: action.payload };
    case "LOGOUT":
      return { ...state, encodedToken: "" };
  }
};
export default function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(initialUser);

  const [state, dispatch] = useReducer(authReducer, initialState);

  const signupHandler = async ({ firstName, lastName, username, password }) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          password,
          profilePic:
            "https://tse1.mm.bing.net/th?id=OIP.LSDaZCxRd9oeYsgbJXDp7AHaEK&pid=Api&P=0&h=180",
        }),
      });
      if (response.status === 201) {
        const data = await response.json();
        // console.log(data);
        dispatch({ type: "AUTH_SUCCESS", payload: data.encodedToken });
        navigate("/login");
      }
    } catch (e) {
      console.error(e);
    }
  };
  const loginHandler = async ({ username, password }) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      if (response.status === 200) {
        const data = await response.json();
        dispatch({ type: "AUTH_SUCCESS", payload: data.encodedToken });

        const loggedInUser = data.foundUser;
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        setUser(loggedInUser);

        localStorage.setItem("token", data.encodedToken);

        navigate("/");
        toast.success("Logged in successfully");
      }
    } catch (e) {
      console.error(e);
    }
  };
  const isLoggedIn = state.encodedToken.length !== 0;

  const logoutHandler = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        signupHandler,
        loginHandler,
        user,
        logoutHandler,
        isLoggedIn,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
