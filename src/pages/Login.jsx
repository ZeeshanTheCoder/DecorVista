import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      {/* Login Section */}
      <div className="login-section">
        <div className="login-left">
          <h3>New to our Shop?</h3>
          <p>
            There are advances being made in science and technology everyday,
            and a good example of this is the
          </p>
          <NavLink to="/signup">Create an Account</NavLink>
        </div>
        <div className="login-right">
          <h3>
            Welcome Back! <br />
            Please Sign in now
          </h3>
          <form className="login-form">
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <button type="submit">Log in</button>
            <div className="forgot">
              <a href="#">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
