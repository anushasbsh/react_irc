import React, { useState } from 'react';
import './Login.css';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const Login = () => {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleFormSubmit = () => {
    // Simple form validation
    if (action === "Sign Up" && !formData.username.trim()) {
      alert("Please enter your name");
      return;
    }

    // Check max length for name
    if (action === "Sign Up" && formData.username.length > 10) {
      alert("Name should be a maximum of 10 characters");
      return;
    }

    if (!formData.email.trim()) {
      alert("Please enter your email");
      return;
    }

    // Check valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!formData.password.trim()) {
      alert("Please enter your password");
      return;
    }

    // Check min length for password
    if (formData.password.length < 8) {
      alert("Password should be a minimum of 8 characters");
      return;
    }

    // Simulate successful login
    // In a real application, you would perform authentication here
    // For now, let's assume it's successful

    // Show a success message
    alert("Login Successful!");

    // Optionally, you can perform other actions here after successful login
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div> :
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              id="username"
              required
              placeholder='Name'
              onChange={handleInputChange}
            />
          </div>}
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            id="email"
            required
            placeholder='Email ID'
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            id="password"
            required
            placeholder='Password'
            onChange={handleInputChange}
          />
        </div>
      </div>
      {action === "Sign Up" ? <div></div> :
        <div className="forgot-password">Don't have an account? <span>Click Here!</span></div>}
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { handleFormSubmit(); setAction("Login") }}>Login</div>
      </div>
    </div>
  );
}

export default Login;
