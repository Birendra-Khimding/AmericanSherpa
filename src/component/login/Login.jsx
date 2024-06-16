import React, { useState } from 'react'
import './login.css'
import ScrollTop from '../scrollToTop/ScrollTop'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  ScrollTop();
  const handleLogin = (e) => {
    e.preventDefault(); 
    // Logic to handle login
    console.log('Logging in with:', email, password);
    setEmail('');
    setPassword('');
  };

  const handleForgotPassword = () => {
    // Logic for forgot password
    console.log('Forgot password');
  };

  const handleSignUp = () => {
    // Logic for sign up
    console.log('Sign up');
  };

  return (
    <div className="login-container">
      
      <div className="loginInfo">
      <h2>LogIn</h2>
      <p>Log in to your Account or Sign up</p>
      <hr />
      <form onSubmit={handleLogin}>
      <div className='loginContent'>
        <label>Email</label>
        <input
          type="email"
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='loginContent'>
        <label>Password</label>
        <input
          type="password"
          placeholder='Enter Your Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className='btnContainer'>
      <button type= 'button' onClick={handleForgotPassword} className='forgotBtn'>Forgot Password</button>
      <button type = 'submit' onClick={handleLogin} className='loginBtn'>LogIn</button>
      </div>
      </form>
      <div className='singContainer'>
        <p>Don't have an account?</p>
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
      </div>
    </div>
  );
};

export default Login;