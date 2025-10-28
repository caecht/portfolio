import './App.css';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import ContactMe from './contactMe';
import Aurora from './components/Aurora';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

function App() {
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPaused(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const currentRef = heroRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Scroll animation setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.25,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // For regular sections
          if (entry.target.classList.contains('scroll-animate')) {
            entry.target.classList.add('animate-in');
          }
          // For project cards - each card animates when it comes into view
          if (entry.target.classList.contains('project-card')) {
            entry.target.classList.add('animate-in');
          }
          // For scroll cards (experience and certification cards)
          if (entry.target.classList.contains('scroll-card')) {
            entry.target.classList.add('animate-in');
          }
        }
      });
    }, observerOptions);

    // Function to observe all scroll elements
    const observeAllElements = () => {
      // Observe all scroll-animate sections
      const sections = document.querySelectorAll('.scroll-animate');
      sections.forEach(section => observer.observe(section));

      // Observe individual project cards
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach(card => observer.observe(card));

      // Observe scroll cards (experience and certification cards)
      const scrollCards = document.querySelectorAll('.scroll-card');
      scrollCards.forEach(card => observer.observe(card));
    };

    // Initial observation
    observeAllElements();

    // Watch for DOM changes (for dynamically rendered certification cards)
    const mutationObserver = new MutationObserver(() => {
      // Re-observe any new scroll cards
      const scrollCards = document.querySelectorAll('.scroll-card:not(.observed)');
      scrollCards.forEach(card => {
        card.classList.add('observed');
        observer.observe(card);
      });
    });

    mutationObserver.observe(document.body, {
      subtree: true,
      childList: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <Link to="home" smooth={true} duration={500} className="navbar-link">Home</Link>
        <Link to="about" smooth={true} duration={500} className="navbar-link">About</Link>
        <Link to="experience" smooth={true} duration={500} className="navbar-link">Experience</Link>
        <Link to="projects" smooth={true} duration={500} className="navbar-link">Projects</Link>
        <Link to="contact" smooth={true} duration={500} className="navbar-link">Contact</Link>
      </nav>

            {/* Hero Section with Aurora Background */}
      <div 
        id="home" 
        ref={heroRef} 
        style={{ 
          width: '100%', 
          height: '100vh', 
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Aurora
          colorStops={["#960df2", "#ffb3fc", "#5227ff"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <div className="center-text">
          Hi! I'm Chelsea!
        </div>
        <Link to="about" smooth={true} duration={500} className="hero-button">
          Get to know me
        </Link>
      </div>

      {/* About Section */}
      <div id="about" className="scroll-animate">
        <AboutMe />
      </div>

      {/* Experience Section */}
      <div id="experience">
        <Experience />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>

      {/* Contact Section */}
      <div id="contact" className="scroll-animate">
        <ContactMe />
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>݁₊ ⊹ . ݁˖ . ݁· © 2026 Chelsea Creer. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;