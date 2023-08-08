import { Link } from '@tanstack/router';

const Contact: React.FC = () => {
  return (
    <div id='contact'>
      <div className='contents'>
        <Link to='/contact-us'>
          Can we help with your next project? <br />
          <p>
            Contact us
            <span>{'\u25B6'}</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
