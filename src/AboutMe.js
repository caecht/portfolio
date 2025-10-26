import React, { useState } from "react";
import "./App.css";
import profileImg from "./profile.jpg"; // replace with your image path
import uniLogo from "./uniLogo.png"; // replace with your image path

function AboutMe() {
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1l_K7IukOX69GmHzLDLpNH10FTQ3OU0Ro/view?usp=sharing', '_blank');
  };

  return (
    <>
      <div className="title-container">
        <h1 className="title">About Me</h1>
      </div>

      <div className="about-container">
        <div className="about-content">
          
          <div className="profile-section">
            <img src={profileImg} alt="Chelsea Creer" className="profile-img" />
          </div>

          <div className="info-section">
            <h2 className="name">CHELSEA CREER</h2>
            <p className="desc">
              A Computer Science Student Majoring In Software Engineering. 
              Currently Exploring AI, Machine Learning, And Modern Web Development 
              To Create Smarter And More Responsive Systems.
            </p>

            <div className="skills-grid">
              {[
                "Python",
                "Java",
                "C++",
                "HTML",
                "CSS",
                "React",
                "JavaScript",
                "Flet",
                "Flask",
                "TensorFlow",
                "Android Studio",
                "Figma",
                "Canva",
                "MS Excel",
                "Project Management",
                "Machine Learning",
                
                "Prototyping"
              ].map((skill, i) => (
                <div key={i} className="skill-box">
                  {skill}
                </div>
              ))}
            </div>

            <div 
              className={`education-card ${isCardHovered ? 'education-card-hovered' : ''}`}
              onMouseEnter={() => setIsCardHovered(true)}
              onMouseLeave={() => setIsCardHovered(false)}
            >
              <h3 className="edu-title">Education</h3>
              <div className="edu-box">
                <img src={uniLogo} alt="FEU Logo" className="edu-circle" />
                <div className="edu-text">
                  <div className="edu-info-container">
                    <h4>FEU Institute Of Technology</h4>
                    <p>4th Year | Graduating October 2026</p>
                  </div>
                  <div className="edu-achievements">
                      <p>• Top Performing Student [2022-2023]</p>
                      <p>• University Scholar [2022 - 2024]</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="resume-button" onClick={handleResumeClick}>
              MY RESUME
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;