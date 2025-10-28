import React, { useState } from 'react';
import './App.css';
import { FaLocationDot } from 'react-icons/fa6';

function ContactMe() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "d13b7cab-5230-4803-9c9d-d773eee7c097");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Email sent successfully!");
      event.target.reset();
      setTimeout(() => setResult(""), 3000);
    } else {
      setResult("Error submitting email!");
    }
  };

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1l_K7IukOX69GmHzLDLpNH10FTQ3OU0Ro/view?usp=sharing', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/chelsea-creer-876595365/', '_blank');
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <p className="contact-label">Contact Me</p>
        <h1 className="contact-title">Get In Touch!</h1>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2 className="section-title">Contact Information</h2>
          <div className="email-info">
            <span className="email-icon">✉</span>
            <span className="email-text">creerchelsea@gmail.com</span>
          </div>

          <div className="location-info">
            <FaLocationDot className="location-icon" />
            <span className="location-text">Quezon City, Philippines</span>
          </div>

          <p className="contact-description">
            I'm currently seeking internship opportunities starting December 2025 or January 2026. Feel free to reach out if you think I'd be a great fit for your team!
          </p>

          <button className="action-button" onClick={handleResumeClick}>
            My Resume
          </button>

          <button className="action-button" onClick={handleLinkedInClick}>
            LinkedIn
          </button>
        </div>

        <div className="contact-form-section">
          <h2 className="section-title">Send a Message!</h2>
          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="form-textarea"
                rows="5"
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>

            {result && <p className="status-message">{result}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;