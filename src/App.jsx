import React, { useState, useRef, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import About from "./components/About";
import Work from "./components/Education";
import Contact from "./components/Contact";
import SolarSystem3D from './components/3DModel';
import Preloader from './components/Loading';
import BackgroundAnimation from './components/BackgroundAnimation'; 
import backgroundMusic from './assets/Music/background.wav';
import { FaPlay, FaPause } from 'react-icons/fa';

const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; 
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <BackgroundAnimation /> 
      {loading && <Preloader />}
      {!loading && (
        <main className="font-light text-white antialiased selection:bg-lime-300 selection:text-black">
          <Navbar />
          <Hero />
          <Marquee />
          <Projects />
          <About />
          <Work />
          <Contact />
          <div className="mt-10 text-center">
            <SolarSystem3D />
          </div>
          <button 
            onClick={togglePlay} 
            className="fixed top-5 left-5 px-4 py-2 text-lg bg-black text-white rounded-md cursor-pointer transition-transform transform hover:scale-110 active:scale-95 flex items-center"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <audio ref={audioRef} src={backgroundMusic} loop />
        </main>
      )}
    </>
  );
}

export default App;
