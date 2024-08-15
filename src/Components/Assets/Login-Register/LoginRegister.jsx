import React from 'react';
import './LoginRegister.css';
import { FaUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

const LoginRegister = () => {

    function RegisterToLogin(){
        const wrapper = document.querySelector('.wrapper');
        const registerbox = document.querySelector('.register-box');
        const loginbox = document.querySelector('.login-box');

        wrapper.classList.add('active');
        registerbox.style.display="block";
        loginbox.style.display='none';
    }
    function LoginToRegister(){
        const registerbox = document.querySelector('.register-box');
        const wrapper = document.querySelector('.wrapper');
        const loginbox = document.querySelector('.login-box');

        wrapper.classList.remove('active');
        registerbox.style.display="none";
        loginbox.style.display='block';
    }
    //gia to x 
    function HandleClick(){
        const wrapper = document.querySelector('.wrapper');
   
        wrapper.classList.remove('active-popup');
    } 
    return (
    <>
      <div className="wrapper">
        <span className="icon-close" onClick={HandleClick}><IoIosClose/></span>
        <div className="login-box">
          <h2>Login</h2>
          <form action="#">
            <div className="inputbox">
              <span className="icon"><FaUserCircle /></span>
              <input type="text" required autoComplete="off" />
              <label>Username</label>
            </div>
            <div className="inputbox">
              <span className="icon"><FaLock /></span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="login-register" onClick={RegisterToLogin}>
              <p>Don't have an account? <a href="#" className="register-link">Register</a></p>
            </div>
          </form>
        </div>

        <div className="register-box">
          <h2>Register</h2>
          <form action="#">
            <div className="inputbox">
              <span className="icon"><FaUserCircle /></span>
              <input type="text" required />
              <label>Username</label>
            </div>
            <div className="inputbox">
              <span className="icon"><MdEmail /></span>
              <input type="email" required autoComplete="off" />
              <label>Email</label>
            </div>
            <div className="inputbox">
              <span className="icon"><FaLock /></span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />I agree to terms & conditions</label>
            </div>
            <button type="submit" className="btn">Register</button>
            <div className="login-register" onClick={LoginToRegister}>
              <p>Already have an account? <a href="#" className="login-link">Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;