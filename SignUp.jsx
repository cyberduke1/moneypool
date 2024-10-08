import React from "react";
import "./SignUp.css";
import { CiLock, CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const loginclick = () => {navigate('/')}
  return (
    <div className="bodyy">
      <div className="wrapper">
        <form action="">
          <h1>Sign Up</h1>
          <div className="input-box">
            <input type="text" placeholder="Name" required />
            <CiUser className="icon" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Surname" required />
            <CiUser className="icon" />
          </div>
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
          <button type="submit" className="LoginBtn" onClick={loginclick}>
            Login
          </button>
          <div className="register-link">
            <p>
              Dont have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
