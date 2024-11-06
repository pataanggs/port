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
import { FaPlay, FaPause } from 'react-icons/fa';
import Footer from './components/Footer'; 
import backgroundMusic from './assets/Music/background.wav'; 
import { motion } from 'framer-motion';

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
          <SolarSystem3D />
          <motion.button 
            onClick={togglePlay} 
            className="fixed top-5 left-5 p-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 15, backgroundPosition: '100%' }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: isPlaying ? 1.2 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {isPlaying ? <FaPause className="text-2xl" /> : <FaPlay className="text-2xl" />}
          </motion.button>
          <audio ref={audioRef} src={backgroundMusic} loop />
        </main>
      )}
      <Footer />
    </>
  );
}

export default App;
