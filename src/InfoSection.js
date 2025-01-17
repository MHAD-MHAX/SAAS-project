import React from "react";
import "./App.css";

import Fb from "./Images/Facebook.png";
import Ig from "./Images/Instagram.png" ;
import Tp from "./Images/Tripadvisor.png";
import Gps from "./Images/Gps.png";
import Google from "./Images/Google.png";

import Pulse from "./Images/Pulse (1).png";
import Shield from "./Images/Shield.png";
import Stack from "./Images/Stack.png";
import Check from "./Images/Check.png";


const ActPlus = () => {
  return (
    <section className="actplus-container">
      {/* Partner Logos */}
      <div className="partners">
        <img src={Google} alt="Google" />
        <img src={Tp} alt="TripAdvisor" />
        <img src={Fb} alt="Facebook" />
        <img src={Gps} alt="Google Maps" />
        <img src={Ig} alt="Instagram" />
      </div>
      <button className="partners-btn">Se alla Partners</button>

      {/* ActPlus Steps */}
      <h2>Så här fungerar Act+</h2>
      <div className="steps">
        <div className="step-card">
          <span className="icon"><img src={Stack}/></span>
          <p>Vi samlar in och publicerar er företagsdata i Act Locals plattform</p>
        </div>
        <div className="step-card">
          <span className="icon"><img src={Shield}/></span>
          <p>Vi försäkrar oss om att alla uppgifter är korrekta och konsekventa</p>
        </div>
        <div className="step-card">
          <span className="icon"><img src={Pulse}/></span>
          <p>Act Local publicerar er data i det digitala ekosystemet</p>
        </div>
        <div className="step-card highlight">
          <span className="icon"><img src={Check}/></span>
          <p>Nu kan både sökmotorerna och alla nya kunder hitta er!</p>
        </div>
      </div>
    </section>
  );
};

export default ActPlus;