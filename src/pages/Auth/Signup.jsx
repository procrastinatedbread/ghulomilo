import React from "react";
import { NavLink } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <>
      <form>
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
            />
          </div>
          <div className="signup-card-last-name-section">
            <label htmlFor="last-name">Last name:</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Last name"
              required
            />
          </div>
          <div className="signup-card-email-section">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
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
