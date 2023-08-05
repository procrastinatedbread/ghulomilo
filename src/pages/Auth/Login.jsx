import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login-page-main">
        <h1>Login</h1>
        <form>
          <div className="login-card-email-section">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="test@gmail.com"
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
            />
          </div>
          <button type="submit" required className="login-link">
            Login
          </button>
          <br />
          <button type="submit" required className="login-link">
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
