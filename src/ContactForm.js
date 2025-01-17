import React, { useEffect } from "react";
import "./App.css"; // Import your CSS
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration
  }, []);

  return (
    <div className="contact-form-container" data-aos="fade-up">
      <h2 data-aos="fade-up">Låter det intressant?</h2>
      <p data-aos="fade-up">
        Fyll i dina uppgifter nedan så berättar vi gärna mer om hur vi kan hjälpa ert företag!
      </p>
      <form className="contact-form">
        <div className="form-row">
          <div className="form-group" data-aos="zoom-in">
            <label htmlFor="name">Namn</label>
            <input type="text" id="name" placeholder="Ditt namn" />
          </div>
          <div className="form-group" data-aos="zoom-in">
            <label htmlFor="email">E-postadress</label>
            <input type="email" id="email" placeholder="Din e-postadress" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group" data-aos="zoom-in">
            <label htmlFor="phone">Telefon</label>
            <input type="text" id="phone" placeholder="Ditt telefonnummer" />
          </div>
          <div className="form-group" data-aos="zoom-in">
            <label htmlFor="website">Webbplats</label>
            <input type="text" id="website" placeholder="Din webbplats" />
          </div>
        </div>
        <div className="form-group" data-aos="zoom-in">
          <label htmlFor="message">Meddelande</label>
          <textarea id="message" placeholder="Skriv ditt meddelande här"></textarea>
        </div>
        <button type="submit" className="submit-button" data-aos="fade-up">Skicka</button>
      </form>
    </div>
  );
};

export default ContactForm;