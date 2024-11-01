import React from "react";
import { useNavigate } from "react-router-dom"; // If using React Router for navigation
import "../../styles/errorPage/ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button className="home-button" onClick={goHome}>
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
