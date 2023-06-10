import React from "react";
import { Routes, Route } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import Signup from "./components/SignUp";
import App from "./App";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<LoginForm />} /> {/* Update the path to "/" */}
    </Routes>
  );
};

export default Navigation;
