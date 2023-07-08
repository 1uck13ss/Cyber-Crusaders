import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import App from "./App";
import AuthDetails from "./components/AuthDetails";
import Game from "./Game";
import Profile from "./Profile";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic and set isLoggedIn to true upon successful login
    setIsLoggedIn(true);
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginForm onLogin={handleLogin} isLoggedIn={isLoggedIn} />}
      />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/home"
        element={
          isLoggedIn ? (
            <>
              <App />
              <AuthDetails />
            </>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="/Game/:id" element={<Game from="/App" />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/*" element={<Navigate to="/login" />} />{" "}
      {/* Add this route */}
    </Routes>
  );
};

export default Navigation;
