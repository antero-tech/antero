import { useState } from 'react';

const Footer = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <footer id='footer'>
      <div className={showDetails ? 'see-more contents' : 'contents'}>
        <div id='company-contact'>
          <h4>Antero</h4>
          <p className='phone'>- projects@antero.dev</p>
          <p className='phone'>- +1-800-555-5555</p>
        </div>
        <button
          id='see-more-button'
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? '\u25BC' : '\u25B2'}
        </button>
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
