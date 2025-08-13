import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <>
      {/* Signup Section */}
      <div className="login-section">
        <div className="login-left">
          <h3>Already have an account?</h3>
          <p>Log in to access your account and explore our latest products.</p>
          <NavLink to="/login">Login Now</NavLink>
        </div>
        <div className="login-right">
          <h3>Create Your Account</h3>
          <form className="login-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <select required>
              <option value>Choose Role</option>
              <option value="designer">Designer</option>
              <option value="user">User</option>
            </select>
            <label>
              <input type="checkbox" required /> I agree to the terms &amp;
              conditions
            </label>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
