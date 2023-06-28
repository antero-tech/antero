const Navbar = () => {
  return (
    <header id='navbar'>
      <div id='navbar-logo-container'>
        {/* TO DO: add logo when available */}
        {/* <img src='' id='navbar-logo' /> */}
        <h1>Netron Solutions</h1>
      </div>
      <ul id='navbar-links'>
        <li>
          <a href='#home'>home</a>
        </li>
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
  );
};
export default Navbar;
