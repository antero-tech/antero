const Footer = () => {
  return (
    <footer id='footer'>
      <div className='contents'>
        <div id='company-contact'>
          <h4>NETRON SOLUTIONS</h4>
          {/* TO DO: update this to real imformation */}
          <p>- projects@netronsolutions.com</p>
          <p>- +1-800-555-5555</p>
        </div>
        <div id='offices'>
          <div>
            <h4>SEATTLE</h4>
            <p>Remote Offices</p>
            <p>Seattle, WA</p>
            <p>United States</p>
          </div>
          <div>
            <h4>MIAMI</h4>
            <p>Remote Offices</p>
            <p>Miami, FL</p>
            <p>United States</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
