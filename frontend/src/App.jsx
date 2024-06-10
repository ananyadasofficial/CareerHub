import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Dashboard from "./components/Home/Dashboard";
import NotFound from "./components/Home/NotFound";
import "./App.css"; // Ensure this path is correct

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
      {location.pathname === "/" && <Footer />}{" "}
      {/* Render footer only on home page */}
    </>
  );
};

export default App;
