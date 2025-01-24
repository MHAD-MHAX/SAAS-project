import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


import Googlevid from "./Images/Googlevid.mp4"

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
         Lyssna, prata, agera - <br></br>Kunden i fokus
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#555",
            lineHeight: "1.6",
            fontWeight: "bold",
           
          }}
        >
         Med hjälp av vårat direktkopplade API kan <br></br>
         du interagera med dina kunder genom att  <br></br>
         läsa alla recensioner och <br></br>
         omdömen ifrån bl.a. Facebook & Google. <br></br>
        </p>
        <br />
        <Link to ="/act">
        <button
          style={{
            backgroundColor: "black",
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
        </Link>
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
            width: "60%",
            borderRadius: "10px",
            textDecoration: "none",
          }}
          autoPlay
          muted
          playsInline
          loop
        >
          <source
            src={Googlevid}            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

      {/* Media Query for larger screens */}
     
    </div>
  );
};

export default CustomerFocusSection;
