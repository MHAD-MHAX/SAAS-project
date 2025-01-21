import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import CustomerSection from "./CustomerSection";

import CustomerLogo from "./CustomerLogo";

const CustomerFocusSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Default duration for animations
      once: true, // Ensure animation happens only once on scroll
    });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#EAF6FB",
       
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        textAlign: "center",
        gap: "0",
        minHeight: "100vh", // Ensure it takes full height
      }}
    >
      {/* Left Side - Text Content */}
      <div
        style={{
          
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center", // Center the text content
          marginLeft:"0px"
        }}
        data-aos="fade-right" // Animation for left side
      >
        <h1
          style={{
            fontSize: "36px",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          Toppa sökresultatet på <br></br>
          Google
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#555",
            lineHeight: "1.6",
            fontWeight: "bold",
          }}
        >
        Slår man ihop allt detta, att ni syns på relevanta <br></br>
        plattformar med rätt och konsekvent information, <br></br>
        varumärkesskyddade. Att ni agerar, besvarar och <br></br>
        bryr er om era recensioner som kommer in.<br></br>
        <br></br>
        <br></br>
        <br></br>


        Ni publicerar nyheter samt kampanjer och visar för Google <br></br>
        att ni är mån om vad som visas om ert företag på nätet. <br></br>
        Ihop med vår plattform där vi sammanlänkar, optimerar er  <br></br>
        profil för generella nyckelord som dina <br></br>
        kunder söker på, så har ni tjänat stora pluspoäng! <br></br>
        </p>
        <br />
        <button
          style={{
            backgroundColor: "#0066CC",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "25px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Läs mer →
        </button>
        <br></br>
        <br></br>
      </div>
    

      {/* Right Side - Video Content */}
      <div
        classname="Vidpo"
        
        data-aos="fade-left" // Animation for the video side
      >
        <video
          style={{
            width: "70%",
            borderRadius: "10px",
            textDecoration: "none",
          }}
          autoPlay
          muted
          playsInline
          loop
        >
          <source
            src="https://cda.actlocal.se/assets/videos/Actlocal-4-s.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
      </div>
<br></br>
<br></br>
<CustomerLogo/>
    </div>
  );
};

export default CustomerFocusSection;
