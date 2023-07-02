import { useState, useEffect } from 'react';
import { Outlet, Link } from '@tanstack/router';
import Footer from './Footer';

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
          <Link to='/'>
            <h1>Netron Solutions</h1>
          </Link>
        </div>
        <ul id='navbar-links'>
          <li>
            <Link to='/'>about us</Link>
          </li>
          <li>
            <Link to='/our-work'>our work</Link>
          </li>
          <li>
            <Link to='/contact-us'>contact-us</Link>
          </li>
        </ul>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};
export default Navbar;
