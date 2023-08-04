import { useState, useEffect } from 'react';
import { Outlet, Link } from '@tanstack/router';
import Footer from './Footer';

import { useCallback } from 'react';
// Particles imports
import Particles from 'react-particles';
import { Engine } from 'tsparticles-engine';
import { loadFirePreset } from 'tsparticles-preset-fire';

const Navbar: React.FC = () => {
  //use useState to hold background color for navbar
  const [navBackgroundColor, setNavBackgroundColor] = useState('transparent');
  const [navTextColor, setNavTextColor] = useState('var(--light-font)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        //set nav to white with dark font
        setNavTextColor('var(--dark-font)');
        setNavBackgroundColor('var(--nav-background)');
      } else {
        //set nav to transparent with light font
        setNavTextColor('var(--light-font)');
        setNavBackgroundColor('transparent');
      }
    };
    window.addEventListener('scroll', handleScroll);
    //cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fireInit = useCallback(async (engine: Engine): Promise<void> => {
    await loadFirePreset(engine);
  }, []);
  const fireOptions: any = {
    preset: 'fire',
    fullScreen: {
      enable: true,
    },
    particles: {
      move: {
        enable: true,
        speed: 0.5,
      },
    },
  };

  return (
    <div id='app'>
      <header>
        <nav
          id='navbar'
          style={{ backgroundColor: navBackgroundColor, color: navTextColor }}
        >
          <div className='contents'>
            <div id='logo-container'>
              {/* TO DO: add logo when available */}
              {/* <img src='' id='navbar-logo' /> */}
              <Link to='/'>
                <h1>Antero</h1>
              </Link>
            </div>
            <ul id='links' className='wide'>
              <li className='wide'>
                <Link to='/'>about us</Link>
              </li>
              <li className='wide'>
                <Link to='/our-work'>our work</Link>
              </li>
              <li className='wide'>
                <Link to='/contact-us'>contact us</Link>
              </li>
            </ul>
            <div className='thin' id='hamburger'></div>
          </div>
        </nav>
      </header>
      <Particles id='particles' options={fireOptions} init={fireInit} />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Navbar;
