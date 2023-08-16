import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./Signup.css";

const Signup = () => {
  const { signupHandler } = useContext(AuthContext);
  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    signupHandler(signupDetails);
    setSignupDetails({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    });
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="signup-card">
          <h1>Signup</h1>

          <div className="signup-card-first-name-section">
            <label htmlFor="first-name">First name:</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="First name"
              required
              value={signupDetails.firstName}
              onChange={(e) =>
                setSignupDetails({
                  ...signupDetails,
                  firstName: e.target.value,
                })
              }
            />
          </div>
          <div className="signup-card-last-name-section">
            <label htmlFor="last-name">Last name:</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Last name"
              value={signupDetails.lastName}
              onChange={(e) =>
                setSignupDetails({ ...signupDetails, lastName: e.target.value })
              }
              required
            />
          </div>
          <div className="signup-card-email-section">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              name="username"
              placeholder="username"
              value={signupDetails.username}
              onChange={(e) =>
                setSignupDetails({ ...signupDetails, username: e.target.value })
              }
              required
            />
          </div>
          <div className="signup-card-password-section">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={signupDetails.password}
              onChange={(e) =>
                setSignupDetails({ ...signupDetails, password: e.target.value })
              }
              required
            />
          </div>
          <button type="submit" required className="signup-link">
            Signup
          </button>
          <p>
            {" "}
            Already have an account. Let's{" "}
            <NavLink className="login-page-link" to="/login">
              {"  "}
              log in
            </NavLink>
          </p>
        </div>
      </form>
    </>
  );
};

export default Signup;
