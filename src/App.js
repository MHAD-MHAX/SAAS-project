import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

import InfoSection from "./InfoSection";
import GoogleSection from "./GoogleSection";
import CustomerFocusSection from "./CustomerFocus";
import DigitalEcosystem from "./Digital";
import CustomerReviews from "./CustomerReviews";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Navbar from "./Navbar";

import Logo from "../src/Images/LOGO3.jpeg";
import Video from "./Images/Vid.mp4";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation happens only once
    });
  }, []);

  return (
    <div className="main-container">
       <Navbar />
      <div className="container">
        {/* Background Video */}
        <video autoplay muted loop className="background-video">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Header Section */}
       

        {/* Sidebar */}
        {menuOpen && (
          <div className="sidebar" data-aos="fade-right">
            <button className="close-button" onClick={toggleMenu}>
              ✕
            </button>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}

        <br />
        <br />
        <br />
        <br />

        {/* Main Content */}
        <div className="content">
          <h1 className="title" data-aos="fade-up">
            Närvaro online <br /> för resultat offline
          </h1>
          <p className="subtitle" data-aos="fade-up" data-aos-delay="200">
            Vi hjälper både dig som lokalt företag som E-handlare att synas
            bättre på Google och driva fler kunder varje månad till er
            verksamhet.
          </p>
          <div className="buttons" data-aos="zoom-in" data-aos-delay="400">
            <button className="button blue-button">Skanna Företag</button>
            <button className="button white-button">Boka webdemo</button>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <InfoSection />
      <DigitalEcosystem />
      <CustomerFocusSection />
      <GoogleSection />
      <CustomerReviews />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
