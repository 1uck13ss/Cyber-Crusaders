import React, { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import App from "./App";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic and set isLoggedIn to true upon successful login
    setIsLoggedIn(true);
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginForm onLogin={handleLogin} isLoggedIn={isLoggedIn} />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/home"
        element={isLoggedIn ? <App /> : <Navigate to="/login" />}
      />
       <Route path="/*" element={<Navigate to="/login" />} /> {/* Add this route */}
    </Routes>
  );
};

export default Navigation;
