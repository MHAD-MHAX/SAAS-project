import React from "react";
import "./App.css";

import Call from "./Images/Call (1).png";
import Box from "./Images/Box.png";
import inbox from "./Images/Inbox.png";
import Profile from "./Images/Profile.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-item">
          <div className="footer-icon"><img src={Call}/></div>
          <p className="footer-title">Kontakta kundservice</p>
          <p>010 173 40 10</p>
        </div>
      
        <div className="footer-item">
          <div className="footer-icon"><img src={inbox}/></div>
          <p className="footer-title">Nyhetsbrev & Blogg</p>
          <p>Se vår blogg!</p>
        </div>
        <div className="footer-item">
          <div className="footer-icon"><img src={Profile}/></div>
          <p className="footer-title">Referenser</p>
          <p>Se våra kunder!</p>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-column">
          <h3>Tjänster</h3>
          <ul>
            <li>Act+</li>
            <li>Sökmotoroptimering</li>
            <li>Hemsidor</li>
            <li>Landningssidor</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Företaget</h3>
          <ul>
            <li>Om oss</li>
            <li>Artiklar</li>
            <li>Kontakta oss</li>
            <li>Karriär</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Act Local AB - Lokal SEO</h3>
          <p>
            Vi är en SEO-byrå med fokus på lokala företag. Med sökmotoroptimering hjälper vi våra kunder att skaffa nya kunder varje månad via världens största sökmotor, Google.
          </p>
          <ul>
            <li>Vad är SEO</li>
            <li>Lokal SEO</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-address">
          <p>Kullagatan 30, 254 66 Helsingborg</p>
          <p>010 173 40 10</p>
        </div>
        <div className="footer-social">
          <span>Följ oss:</span>
          <span>📘</span>
          <span>📷</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;