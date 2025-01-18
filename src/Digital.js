import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
          textAlign:"left",
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
          Digitala ekosystemet,<br></br>Utöka er synlighet online
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#555",
            lineHeight: "1.6",
            fontWeight: "bold",
          }}
        >
          Vi hjälper dig som lokalt företag att lista din verksamhet på alla
          <br />
          viktiga digitala plattformar. Syns du inte så finns du inte brukar
          <br />
          man säga, i detta sammanhang så stämmer det faktiskt!
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
      </div>

      {/* Right Side - Video Content */}
      <div
        classname="Vidpo"
        
        data-aos="fade-left" // Animation for the video side
      >
        <video
          style={{
            width: "100%",
            borderRadius: "10px",
            textDecoration: "none",
          }}
          autoPlay
          muted
          playsInline
          loop
        >
          <source
            src="https://cda.actlocal.se/assets/videos/Actlocal-1-s.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
      </div>

      {/* Media Query for larger screens */}
     
    </div>
  );
};

export default CustomerFocusSection;
