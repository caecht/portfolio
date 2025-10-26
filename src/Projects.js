import React from "react";
import "./App.css";
import { FaUser } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "ARAMI",
      subtitle: "An Intelligent Tutoring System for Learning Waray",
      role: "Project Manager, Front-End Developer, Documentation Lead",
      image: "aramiImage",
      skills: ["Project Management", "Python", "Flet", "Machine Learning", "BKT-LSTM Algorithm", "Model Evaluation"],
      description: "An intelligent tutoring system that teaches Waray language through personalized lessons. Uses Bayesian Knowledge Tracing and LSTM models to adapt difficulty based on learner performance."
    },
    {
      id: 2,
      title: "MoodSnaps",
      subtitle: "AI-Powered Emotion Recognition Photobooth",
      role: "Fullstack Developer",
      image: "moodsnapImage",
      skills: ["Flask", "JavaScript", "TensorFlow/Keras", "Computer Vision", "Python"],
      description: "An emotion recognition photobooth that detects facial expressions in real-time using TensorFlow's fer2013 model. Captures photos automatically when emotions are consistently detected."
    },
    {
      id: 3,
      title: "CuisiNER",
      subtitle: "Filipino Food Named Entity Recognition System",
      role: "Solo Developer",
      image: "cuisinerImage",
      skills: ["Python", "NLP", "Named Entity Recognition", "spaCy", "Streamlit", "Data Annotation"],
      description: "An NLP system that identifies and extracts Filipino food names from text. Recognizes 67 Filipino dishes with a Streamlit web interface for real-time text processing."
    },
    {
      id: 4,
      title: "JolliStock",
      subtitle: "Stock Price Prediction",
      role: "Duo Developer",
      image: "jollistockImage",
      skills: ["Python", "PyTorch", "LSTM", "Jupyter Notebook", "Data Visualization", "Time-Series Forecasting"],
      description: "A time-series forecasting model that predicts Jollibee Foods Corp stock prices using PyTorch LSTM with a 30-day sliding window approach."
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-role">
                <FaUser className="role-icon-project" /> {project.role}
              </p>

              <div className="project-skills">
                {project.skills.map((skill, index) => (
                  <span key={index} className="project-skill-tag">{skill}</span>
                ))}
              </div>

              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;