import { useState, useRef, useEffect } from 'react';

const Footer = () => {
  const [showDetails, setShowDetails] = useState(false);
  const bottomEl = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    bottomEl?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [showDetails]);

  return (
    <footer id='footer'>
      <div className='contents'>
        <div className='info-mobile'>
          <div id='company-contact'>
            {showDetails ? (
              <>
                <h4>Antero</h4>
                <p>projects@antero.dev</p>
                <p>+1-800-555-5555</p>
              </>
            ) : (
              <h4>Antero</h4>
            )}
          </div>
          <button
            className='see-more-button'
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? '\u25BC' : '\u25B2'}
          </button>
          <div id='offices'>
            {showDetails ? (
              <>
                <div>
                  <h4>SEATTLE</h4>
                  <p className='subheading'>Remote Offices</p>
                  <p>Seattle, WA</p>
                  <p>USA</p>
                </div>
                <div>
                  <h4>MIAMI</h4>
                  <p className='subheading'>Remote Offices</p>
                  <p>Miami, FL</p>
                  <p>USA</p>
                </div>
              </>
            ) : (
              <>
                <h4>Offices:</h4>
                <div>
                  Seattle, WA
                  <br /> Miami, FL
                </div>
              </>
            )}
          </div>
        </div>
        <div className='info'>
          <div id='company-contact'>
            <h4>Antero</h4>
            <p>- projects@antero.dev</p>
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
      </div>
      <div ref={bottomEl}></div>
    </footer>
  );
};

export default Footer;
