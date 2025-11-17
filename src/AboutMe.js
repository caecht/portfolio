import React, { useState, useRef } from "react";
import "./App.css";
import profileImg from "./profile.jpg"; // replace with your image path
import uniLogo from "./uniLogo.png"; // replace with your image path

function AboutMe() {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const profileRef = useRef(null);

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1aB-jd_idV-6lwgxTptj0tI3vP7W_nLiy/view?usp=sharing', '_blank');
  };

  const handleProfileMouseMove = (e) => {
    if (!profileRef.current) return;

    const rect = profileRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const distX = (mouseX / (rect.width / 2)) * 8;
    const distY = -(mouseY / (rect.height / 2)) * 8;

    setRotateX(distY);
    setRotateY(distX);
  };

  const handleProfileMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <>
      <div className="title-container">
        <h1 className="title">About Me</h1>
      </div>

      <div className="about-container">
        <div className="about-content">
          
          <div className="profile-section">
            <img 
              ref={profileRef}
              src={profileImg} 
              alt="Chelsea Creer" 
              className="profile-img"
              onMouseMove={handleProfileMouseMove}
              onMouseLeave={handleProfileMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            />
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
                      <p>• University Scholar [2022 - 2025]</p>
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