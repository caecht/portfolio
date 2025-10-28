import React, { useState } from "react";
import "./App.css";
import pmiLogo from "./assets/PMILogo.png";
import CertiportLogo from "./assets/CertiportLogo.png";
import CiscoLogo from "./assets/CiscoLogo.png";
import { FaCalendarDay } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import { FaAngleRight } from 'react-icons/fa';

function Experience() {
  const [activeTab, setActiveTab] = useState("work");

  const experiences = [
    {
      id: 1,
      title: "FEU Tech CS Expo 2025",
      role: "⠀Secretariat Committee Head",
      date: "August 2025 – December 2025",
      responsibilities: [
        "Directed 5-month Secretariat Committee operations for 200+ attendee tech expo, managing documentation workflow, communication channels, and coordination between 8 committees with 40+ project exhibitors.",
        "Designed Excel tracking systems for schedules, attendance, and deliverables across 20+ committee members while serving as primary liaison between internal teams, external partners, and faculty advisors."
      ],
      skills: ["Project Management", "Microsoft Excel", "Documentation & Communication", "Event Coordination", "Team Leadership"]
    },
    {
      id: 2,
      title: "FEU Tech Design Thinking Summit 2024",
      role: "⠀Finalist, Project Manager, UI Designer",
      date: "2024",
      responsibilities: [
        "Led hackathon-style development of Calorate calorie-tracking app concept as project manager, directing research, planning, and UI/UX design in Figma under time constraints to create wireframes and functional mockups.",
        "Presented finalist concept to judging panel demonstrating design thinking skills, while achieving First Place in Poster Making category for visual communication excellence."
      ],
      skills: ["Project Management", "Figma", "UI/UX Design", "Graphic Design", "Presentation Skills"]
    },
    {
      id: 3,
      title: "Freelance Graphic Designer",
      role: "⠀Graphic Designer",
      date: "2021 – 2024",
      responsibilities: [
        "Created branded visual materials including brochures, posters, and infographics for 5+ clients across education, small business, and event sectors, translating client needs into compelling designs.",
        "Managed end-to-end design projects from client consultation and concept development through revisions and final delivery, meeting deadlines while maintaining quality standards."
      ],
      skills: ["Graphic Design", "Canva", "Figma", "Client Management", "Visual Communication"]
    },
    {
      id: 4,
      title: "FEU Tech Student Council",
      role: "⠀Programs Committee Member",
      date: "2022",
      responsibilities: [
        "Assisted in planning, organizing, and executing student programs and events, supporting logistics coordination, resource management, and schedule alignment for smooth program flow.",
        "Supported communication and documentation needs throughout event cycles, ensuring timely preparation of materials before, during, and after programs."
      ],
      skills: ["Event Coordination", "Internal Communication"]
    }
    
  ];

  const certifications = [
    {
      id: 1,
      title: "PMI Project Management Ready",
      issuer: "Project Management Institute",
      date: "Issued Mar 2025",
      credentialId: "wyx6B-48D4",
      skills: ["Project Management"],
      logo: pmiLogo
    },
    {
      id: 2,
      title: "Information Technology Specialist in Python",
      issuer: "Certiport - A Pearson VUE Business",
      date: "Issued Jul 2024",
      credentialId: "XGaX-XMzH",
      skills: ["Python (Programming Language)"],
      logo: CertiportLogo
    },
    {
      id: 3,
      title: "DevNet Associate",
      issuer: "Cisco Networking Academy",
      date: "Issued Jan 2025",
      credentialId: null,
      skills: ["DevNet Associate"],
      logo: CiscoLogo
    },
    {
      id: 4,
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      date: "Issued Sep 2024",
      credentialId: null,
      skills: ["Network Communications"],
      logo: CiscoLogo
    }
    
  ];

  return (
    <div className="experience-container">
      <h1 className="experience-title">My Experience</h1>

      <div className="tab-container">
        <button
          className={`tab-button ${activeTab === "work" ? "active" : ""}`}
          onClick={() => setActiveTab("work")}
        >
          Work & Leadership Experience
        </button>
        <button
          className={`tab-button ${activeTab === "certifications" ? "active" : ""}`}
          onClick={() => setActiveTab("certifications")}
        >
          Certifications
        </button>
      </div>

      <div className="timeline">
        {activeTab === "work" ? (
          <>
            {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
              {index !== experiences.length - 1 && <div className="timeline-line"></div>}
              
              <div className="experience-card scroll-card">
                <div className="card-header">
                  <div className="card-title-section">
                    <h3 className="card-title">{exp.title}</h3>
                    <p className="card-role"><BsPersonCircle className="role-icon" /> {exp.role}</p>
                  </div>
                  <div className="card-date">
                    <FaCalendarDay className="calendar-icon" />
                    {exp.date}
                  </div>
                </div>

                <div className="card-body">
                  {exp.responsibilities.map((resp, index) => (
                    <p key={index} className="responsibility">• {resp}</p>
                  ))}
                </div>

                <div className="card-skills">
                  {exp.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            ))}
            <div className="timeline-item" key="final-dot">
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
            </div>
          </>
        ) : (
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="certification-card scroll-card">
                <div className="cert-header">
                  <div className="cert-icon-box">
                    <img src={cert.logo} alt={cert.issuer} className="cert-logo" />
                  </div>
                  <div className="cert-info">
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-issuer"><FaAngleRight className="cert-issuer-icon" /> {cert.issuer}</p>
                  </div>
                </div>
                
                <div className="cert-details">
                  <p className="cert-detail-item">• {cert.date}</p>
                  {cert.credentialId && (
                    <p className="cert-detail-item">• Credential ID: {cert.credentialId}</p>
                  )}
                </div>

                <div className="cert-skills">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;
