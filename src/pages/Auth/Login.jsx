import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./Login.css";

const Login = () => {
  const { loginHandler } = useContext(AuthContext);
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const onLoginSubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(loginDetails);
  };
  const fixedLoginDetails = {
    username: "adarshbalika",
    password: "adarshbalika123",
  };

  const guestLoginHandler = () => {
    setLoginDetails({
      username: fixedLoginDetails.username,
      password: fixedLoginDetails.password,
    });
    console.log(fixedLoginDetails.username);

    // navigate("/explore")
  };
  return (
    <>
      <div className="login-page-main">
        <h1>Login</h1>
        <form onSubmit={onLoginSubmitHandler}>
          <div className="login-card-email-section">
            <label htmlFor="username">Username: </label>
            <input
              id="username"
              name="username"
              placeholder="nikhilchhabra"
              value={loginDetails.username}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, username: e.target.value })
              }
              required
            />
          </div>
          <div className="login-card-password-section">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
              value={loginDetails.password}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, password: e.target.value })
              }
            />
          </div>
          <button type="submit" className="login-link">
            Login
          </button>
          <br />
          <button
            type="submit"
            className="login-link"
            onClick={guestLoginHandler}
          >
            Login as guest
          </button>
          <p>
            {" "}
            Don't have an account. Let's{" "}
            <NavLink className="sign-up-page-link" to="/signup">
              {"  "}
              sign up
            </NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
