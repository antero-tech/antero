import { useState, useEffect, useCallback } from 'react';
import { Outlet, Link } from '@tanstack/router';
import Footer from './Footer';

// Particles imports
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { loadFirePreset } from 'tsparticles-preset-fire';

const Navbar: React.FC = () => {
  //use useState to hold background color for navbar
  const [navBackgroundColor, setNavBackgroundColor] = useState('transparent');
  const [navTextColor, setNavTextColor] = useState('var(--light-font)');
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  /*
   * TODO:
   * Mobile only - see media query in index.scss line 81
   */
   
  useEffect(() => {
    const handleScroll = () => {
      //only change colors if hamburger menu is closed, otherwise it will overwrite the ham menu styles
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
              <Link to='/'>
                <svg viewBox='0 -0.0000034999999911633495 495 389.000007'>
                  <g
                    transform='matrix(1.6184427561 0 0 1.8901943786 247.5419778268 194.6044111496)'
                    id='lySATFc2GEsTrH03mi08A'
                  >
                    <path
                      style={{
                        stroke: 'rgb(0,0,0)',
                        strokeWidth: '1',
                        strokeDasharray: 'none',
                        strokeLinecap: 'butt',
                        strokeDashoffset: '0',
                        strokeLinejoin: 'miter',
                        strokeMiterlimit: '4',
                        fill: navTextColor,
                        fillRule: 'nonzero',
                        opacity: '1',
                      }}
                      vectorEffect='non-scaling-stroke'
                      transform=' translate(0, 0)'
                      d='M -152.64178 102.69019 L 0 -102.69018 L 152.64178 102.69019 L -65.41789999999997 102.69019 L -40.239869999999975 59.57379 L 65.41791000000003 65.34831 L 0.000010000000031595846 -41.38404 L -87.22385999999997 102.69019 z'
                      strokeLinecap='round'
                    />
                  </g>
                </svg>
                <p>Antero</p>
              </Link>
            </div>
            <ul id='links'>
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
            <div id='hamburger-icon-container' onClick={hamburgerClick}>
              {/* this is the hamburger icon only  */}
              <div
                style={{ backgroundColor: navTextColor }}
                className={
                  hamburgerOpen
                    ? 'hamburger xHamburger'
                    : 'hamburger flatHamburger'
                }
              ></div>
              {/* this is the menu that opens when you click the hamburger icon */}
            </div>
            <div
              id='hamburger-menu'
              className={hamburgerOpen ? 'open' : ''}
              style={{ backgroundColor: navBackgroundColor }}
            >
              <ul>
                <li onClick={() => setActiveTab(window.location.pathname)}>
                  <Link to='/'>about us</Link>
                </li>
                {'\u25CF'}
                <li
                  onClick={() => setActiveTab(window.location.pathname)}
                  className={activeTab === '/our-work' ? 'active-tab' : ''}
                >
                  <Link to='/our-work'>our work</Link>
                </li>
                {'\u25CF'}
                <li
                  onClick={() => setActiveTab(window.location.pathname)}
                  className={activeTab === '/contact-us' ? 'active-tab' : ''}
                >
                  <Link to='/contact-us'>contact us</Link>
                </li>
              </ul>
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
