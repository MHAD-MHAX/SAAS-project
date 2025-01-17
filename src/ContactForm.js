import React from "react";
import "./App.css";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2>Låter det intressant?</h2>
      <p>
        Fyll i dina uppgifter nedan så berättar vi gärna mer om hur vi kan hjälpa ert företag!
      </p>
      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Namn</label>
            <input type="text" id="name" placeholder="Ditt namn" />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-postadress</label>
            <input type="email" id="email" placeholder="Din e-postadress" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Telefon</label>
            <input type="text" id="phone" placeholder="Ditt telefonnummer" />
          </div>
          <div className="form-group">
            <label htmlFor="website">Webbplats</label>
            <input type="text" id="website" placeholder="Din webbplats" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Meddelande</label>
          <textarea id="message" placeholder="Skriv ditt meddelande här"></textarea>
        </div>
        <button type="submit" className="submit-button">Skicka</button>
      </form>
    </div>
  );
};

export default ContactForm;