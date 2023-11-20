import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./signIn.css";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    axios
      .post("https://stg.dhunjam.in/account/admin/login", {
        username,
        password,
      })
      .then(function (response) {
        if (response.data.status === 200) {
          console.log(response.data.data.id)
          navigate(`/admin/${response.data.data.id}`);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="signInPage">
      <div className="signInBox">
        <div className="heading h1">Venue Admin Login</div>
        <div className="input">
          <input
            className="input1"
            type="text"
            placeholder="Username"
            onChange={handleUsernameChange}
          />
          <div className="password-container">
            <input
              className="input2"
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            <span className="icon" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
            </span>
          </div>
        </div>
        <div className="button">
          <button onClick={handleSignIn}>Sign In</button>
        </div>
        <div className="new-registration">
          <p>New Registration?</p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
