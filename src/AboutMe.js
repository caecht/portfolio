import React from "react";
import "./App.css";
import profileImg from "./profile.jpg"; // replace with your image path
import uniLogo from "./uniLogo.png"; // replace with your image path

function AboutMe() {
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
                "React",
                "Firebase",
                "MongoDB",
                "TensorFlow",
                "Flet",
                "C++",
                "Python",
                "React",
                "Firebase",
                "MongoDB",
                "TensorFlow",
                
              ].map((skill, i) => (
                <div key={i} className="skill-box">
                  {skill}
                </div>
              ))}
            </div>

            <div className="education-card">
              <h3 className="edu-title">Education</h3>
              <div className="edu-box">
                <img src={uniLogo} alt="FEU" className="edu-circle" />
                <div className="edu-text">
                  <h4>FEU Institute Of Technology</h4>
                  <p>4th Year | Graduating October 2026</p>
                  <ul>
                    <li>University Scholar [2022 - 2024] | Top Performing Student [2022 - 2023]</li>
                    <li>GPA: 3.5 / 4.0</li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
