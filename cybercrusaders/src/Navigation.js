import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Signup from "./components/SignUp";
import App from "./App";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    // User is logged in, render App component
    return <App onLogout={handleLogout} />;
  } else {
    // User is not logged in, render either LoginForm or Signup component based on the link
    const isSignup = window.location.pathname === "/signup";
    return isSignup ? <Signup /> : <LoginForm onLogin={handleLogin} />;
  }
};

export default Navigation;
