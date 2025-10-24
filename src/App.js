import './App.css';
import AboutMe from './AboutMe';
import FaultyTerminal from './components/FaultyTerminal';
import { useState, useEffect, useRef } from 'react';


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
      {/* Hero Section with Terminal */}
      <div id="home" ref={heroRef} style={{ width: '100%', height: '100vh', position: 'relative' }}>
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
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={true}
          brightness={0.6}
        />

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="center-text">
          Hi! I'm Chelsea!
        </div>
      </div>

      {/* About Section */}
      <div id="about">
        <AboutMe />
      </div>
    </>
  );
}


export default App;
