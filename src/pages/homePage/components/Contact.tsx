import { Link } from '@tanstack/router';

const Contact: React.FC = () => {
  return (
    <div id='contact'>
      <div className='contents'>
        <p>Let's work together.</p>
        <Link to='/contact-us'>
          Contact us <span>{'\u25B6'}</span>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
