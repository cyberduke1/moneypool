import React, { useState } from "react";
import "./Login.css";
import { CiLock, CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const registerclick = () => {navigate('/signup')}
  const homeclick = () => {navigate('/homepage')}
  return (
    <div className="bodyy">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <CiUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <CiLock className="icon" />
          </div>{" "}
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="LoginBtn" onClick={homeclick}>
            Login
          </button>
          <div className="register-link">
            <p>
              Dont have an account? <a href="#" onClick={registerclick}>Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
