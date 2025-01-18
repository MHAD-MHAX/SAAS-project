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
    <section
      style={{
        paddingRight: "180px",
        backgroundColor: "#EAF6FB",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        textAlign: "center",
      }}
    >
      {/* Left Side - Text Content */}
      <div
        style={{
        paddingLeft:"100px"
        
        }}
        data-aos="fade-right" // Animation for left side
      >
        <h1
          style={{
            fontSize: "36px",
            color: "#333",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
       Lyssna, prata, agera -<br></br> Kunden i fokus
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#555",
            lineHeight: "1.6",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
       Med hjälp av vårat direktkopplade API kan du interagera<br></br> med dina kunder genom att läsa alla recensioner och <br></br>omdömen ifrån bl.a. Facebook & Google.
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
            float: "left",
          }}
        >
          Läs mer →
        </button>
      </div>

      {/* Right Side - Video Content */}
      <div
        style={{
          marginRight: "60px",
          flex: "1 1 100%", // Full width on small screens
          maxWidth: "400px",
          marginBottom: "20px", // Space between video and text on small screens
        }}
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
          className="image-left-10"
        >
          <source
            src="https://cda.actlocal.se/assets/videos/Actlocal-2-s.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Media Query for larger screens */}
      <style>
        {`
          @media (min-width: 768px) {
            section {
              flex-direction: row; /* Makes the sections sit side by side */
              gap: 0px; /* Small gap between sections */
            }
            section > div {
              flex: 1 1 45%; /* Each side takes up 45% of the screen width */
            }


          }
        `}
      </style>
    </section>
  );
};

export default CustomerFocusSection;