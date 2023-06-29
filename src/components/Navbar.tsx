import { useState, useEffect } from 'react';
import { Outlet } from '@tanstack/router';

const Navbar: React.FC = () => {
  //use useState to hold background color for navbar
  const [navBackgroundColor, setNavBackgroundColor] = useState('transparent');
  const [navTextColor, setNavTextColor] = useState('--light-font');

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

  return (
    <>
      <header
        id='navbar'
        style={{ backgroundColor: navBackgroundColor, color: navTextColor }}
      >
        <div id='navbar-logo-container'>
          {/* TO DO: add logo when available */}
          {/* <img src='' id='navbar-logo' /> */}
          <h1>Netron Solutions</h1>
        </div>
        <ul id='navbar-links'>
          <li>
            <a href='#about-us'>about us</a>
          </li>
          <li>
            <a href='#our-work'>our work</a>
          </li>
          <li>
            <a href='#contact-us'>contact us</a>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};
export default Navbar;
