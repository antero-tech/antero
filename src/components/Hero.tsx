import React, { useCallback } from 'react';
// Particles imports
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';
import loginParticles from '../assets/login-particles.json';
import { loadFirePreset } from "tsparticles-preset-fire";

const Hero = () => {
  
    // Initialze background particles
    // const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    //   await loadFull(engine);
    // }, []);

    const fireInit = useCallback(async (engine: Engine): Promise<void> => {
      await loadFirePreset(engine);
    }, []);
    const fireOptions: any = {
      preset: "fire",
      fullScreen: {
        enable: true,
      },
      particles: {
        move: {
          enable: true,
          speed: 0.5,
        },
      }
    }
  
    //const particleOptions: any = loginParticles;
  return (
    <div id='hero'>
      <Particles id='particles' options={fireOptions} init={fireInit} />
      <div id="hero-text">
        <br></br>
        <br></br>
        <br></br>
        <h1>Brutally Simple</h1>
        <h1>Dynamic Digital Solutions</h1>
        <h2></h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Hero;
