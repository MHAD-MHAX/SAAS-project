import React, { useState } from "react";
import "./App.css";


import InfoSection from "./InfoSection";
import CustomerReviews from "./CustomerReviews";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Navbar from "./Navbar";


import Logo from "../src/Images/LOGO3.jpeg";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="main-container">

    
    <div className="container">
      
       {/* Header Section */}
     
<Navbar/>
      {/* Sidebar */}
      {menuOpen && (
        <div className="sidebar">
          <button className="close-button" onClick={toggleMenu}>
            ✕
          </button>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      

      {/* Main Content */}
      <div className="content">
        <h1 className="title">Närvaro online <br /> för resultat offline</h1>
        <p className="subtitle">
          Vi hjälper både dig som lokalt företag som E-handlare att synas bättre
          på Google och driva fler kunder varje månad till er verksamhet.
        </p>
        <div className="buttons">
          <button className="button blue-button">Skanna Företag</button>
          <button className="button white-button">Boka webdemo</button>
        </div>
        
      </div>

    </div>
    <InfoSection/>
    <CustomerReviews/>
    <ContactForm/>
    <Footer/>
    </div>
    
  );
}

export default App;