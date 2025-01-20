import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";




import ContactUs from "./ContactUs";

import AboutUs from "./AboutUs";

import Home from "./Home";

import LandingPage from "./LandingPage";

import Act from "./Act";
import Scan from "./Scan";

import Logo from "../src/Images/LOGO3.jpeg";
import Video from "./Images/Vid.mp4";

function App() {


  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation happens only once
    });
  }, []);

  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/landing" element={<LandingPage/>} />
          <Route path="/act" element={<Act/>} />
          <Route path="/scan" element={<Scan/>} />
          </Routes>
          </Router>
     
  
    </div>
  );
}

export default App;
