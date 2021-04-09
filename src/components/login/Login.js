import React, { useState } from "react";
import roundlogo from "../../assets/roundlogo.png";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Login.css";

const Login = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="login-container">
      <div className="left-container">
        <div className="logo">
          <img src={roundlogo} alt="" />
        </div>

        <div className="welcome-message">
          <h3>Welcome Back!</h3>
          <p id="signin-message">Sign in to continue to Madinad</p>
        </div>

        <div className="username-area">
          <p className="text">Username*</p>
          <input
            type="text"
            placeholder="Enter username"
            className="input-field"
          />
        </div>

        <div className="password-area">
          <div className="password-area-text">
            <p className="text">Password*</p>
            <div id="forgotten-password">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
          <input
            type="text"
            placeholder="Enter password"
            className="input-field"
          />
        </div>

        <div className="remember-area">
          <Checkbox
            checked={checked}
            onChange={handleChange}
            color="primary"
            id="checkbox"
          />
          <p id="remember" className="text">
            Remember me?
          </p>
        </div>
        <Button variant="contained" color="primary" id="login-button">
          Log In
        </Button>
        <div className="socials-signin">
          <h3 id="signwith">Sign in With</h3>
          <div className="icons">
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              style={{ color: "#556EE6", cursor: "pointer" }}
            />
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              style={{ color: "#50A5F1", cursor: "pointer" }}
            />
            <FontAwesomeIcon
              icon={["fab", "google"]}
              style={{ cursor: "pointer", color: "#F46A6A" }}
            />
          </div>
        </div>
      </div>
      <div className="footer">© Copyright 2021 Madinad</div>

      <div className="right-container"></div>
    </div>
  );
};

export default Login;
