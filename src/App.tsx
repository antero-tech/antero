import React, { useCallback } from 'react';


import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import OurWork from './components/OurWork';

// Particles imports
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';
import loginParticles from './assets/login-particles.json';



function App() {
  // Initialze background particles
  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    await loadFull(engine);
  }, []);

  const particleOptions: any = loginParticles;
  return (
    <>
      <Particles options={particleOptions} init={particlesInit} />
      {/* header */}
      <Navbar />
      {/* main */}
      <main>
        <Hero />
        <AboutUs />
        <OurWork />
        <Contact />
      </main>
      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
