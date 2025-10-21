import './App.css';
import BlurText from "./components/BlurText";
import FaultyTerminal from './components/FaultyTerminal';
import LiquidEther from './components/LiquidEther';
import Galaxy from './components/Galaxy';
import DotGrid from './components/DotGrid';


function App() {
  return (

    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <FaultyTerminal
        scale={2.5}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={0.4}
        pause={false}
        scanlineIntensity={0.5}
        glitchAmount={1}
        flickerAmount={1}
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

  );
}


export default App;
