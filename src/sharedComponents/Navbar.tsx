import { useState, useEffect, useCallback } from 'react';
import { Outlet, Link } from '@tanstack/router';
import Footer from './Footer';

// Particles imports
import Particles from 'react-particles';
import { Engine } from 'tsparticles-engine';
import { loadFirePreset } from 'tsparticles-preset-fire';

const Navbar: React.FC = () => {
  //use useState to hold background color for navbar
  const [navBackgroundColor, setNavBackgroundColor] = useState('transparent');
  const [navTextColor, setNavTextColor] = useState('var(--light-font)');
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      //only change colors if hamburger is closed, otherwise it will overwrite the ham menu styles
      if (!hamburgerOpen) {
        if (window.scrollY > 30) {
          //set nav to white with dark font
          setNavTextColor('var(--dark-font)');
          setNavBackgroundColor('var(--nav-background)');
        } else {
          //set nav to transparent with light font
          setNavTextColor('var(--light-font)');
          setNavBackgroundColor('transparent');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    //cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hamburgerOpen]);

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
  const hamburgerClick = () => {
    if (window.scrollY > 30) {
      setNavBackgroundColor('var(--nav-background)');
      setNavTextColor('var(--dark-font)');
    } else {
      //if we are ar the top of the page, and we are clicking to open the menu
      //we need to make the nav background white, and the text dark
      if (!hamburgerOpen) {
        setNavBackgroundColor('var(--nav-background)');
        setNavTextColor('var(--dark-font)');
      } else {
        //if we are at the top and are closing the menu
        //make the bacjground transpareent and the test light
        setNavBackgroundColor('transparent');
        setNavTextColor('var(--light-font)');
      }
    }
    setHamburgerOpen(!hamburgerOpen);
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
              <Link to='/'>Antero</Link>
            </div>
            <ul id='links' className='wide listi'>
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
            <div id='hamburger-container' onClick={hamburgerClick}>
              <div
                style={{ backgroundColor: navTextColor }}
                // style={{ borderBottom: `3px solid ${navTextColor}` }}
                className={
                  hamburgerOpen
                    ? 'hamburger xHamburger'
                    : 'hamburger flatHamburger'
                }
              ></div>
              <div id='hamburger-menu' className={hamburgerOpen ? 'open' : ''}>
                <ul>
                  <li>
                    <Link to='/'>about us</Link>
                  </li>
                  <li>
                    <Link to='/our-work'>our work</Link>
                  </li>
                  <li>
                    <Link to='/contact-us'>contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
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
