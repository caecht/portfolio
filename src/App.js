import './App.css';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import ContactMe from './contactMe';
import FaultyTerminal from './components/FaultyTerminal';
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

 return (
    <>
      <nav className="navbar">
        <Link to="home" smooth={true} duration={500} className="navbar-link">Home</Link>
        <Link to="about" smooth={true} duration={500} className="navbar-link">About</Link>
        <Link to="experience" smooth={true} duration={500} className="navbar-link">Experience</Link>
        <Link to="projects" smooth={true} duration={500} className="navbar-link">Projects</Link>
        <Link to="contact" smooth={true} duration={500} className="navbar-link">Contact</Link>
      </nav>

      {/* Hero Section with Terminal */}
      {/* <div id="home" ref={heroRef} style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <FaultyTerminal
          scale={1.8}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.8}
          pause={isPaused}
          scanlineIntensity={0.3}
          glitchAmount={0.5}
          flickerAmount={0.5}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.14}
          tint="#d2a1f2"
          mouseReact={false}
          mouseStrength={0.5}
          pageLoadAnimation={true}
          brightness={0.6}
        />

        <div className="center-text">
          Hi! I'm Chelsea!
        </div>
      </div> */}

      {/* Placeholder black screen */}
      <div id="home" ref={heroRef} style={{ width: '100%', height: '100vh', position: 'relative', backgroundColor: '#05000f' }}>
        <div className="center-text">
          Hi! I'm Chelsea!
        </div>
      </div>

      {/* About Section */}
      <div id="about">
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
      <div id="contact">
        <ContactMe />
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>݁₊ ⊹ . ݁˖ . ݁·</p>
      </footer>

    </>
  );
}


export default App;
