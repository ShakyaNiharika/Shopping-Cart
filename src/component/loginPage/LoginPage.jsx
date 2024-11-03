import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/loginPage/LoginPage.css";
import Input from "../input/Input";
import Button from "../button/Button";
import { AuthContext } from "../context/authContext/AuthContext";
import useAuth from "../cutomHook/useAuthcompo/useAuth";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Get login function and user state from context
  const { user, login } = useAuth();
  console.log(login, "logindata");

  const from = location.state?.from?.pathname || "/";
  console.log(from, "redirectData");

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    // Attempt login
    const { success, data } = login(username, password);
    if (!success) {
      setError("Invalid username or password");
    } else {
      localStorage.setItem("user", JSON.stringify(data.username));
      setSuccessMessage("Login Successfull");
      // Delay navigation for 1.5 seconds
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1500);
    }
  };

  return (
    <div className="loginPage-container">
      {user ? (
        <p className="loginPage-redirect">Redirecting to Dashboard...</p>
      ) : (
        <form className="loginPage-form" onSubmit={handleLogin}>
          <h2 className="loginPage-title">Login</h2>
          <Input
            className="loginPage-input"
            placeholder="Please Enter your name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            className="loginPage-input"
            type="password"
            placeholder="Please Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="loginPage-error">{error}</p>}
          {successMessage && (
            <p className="loginPage-success">{successMessage}</p>
          )}
          <Button
            className="loginPage-button"
            onClick={handleLogin}
            title="Login"
          />
        </form>
      )}
    </div>
  );
};

export default LoginPage;
