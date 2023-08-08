import { FC } from 'react';
import logo from '../../../assets/antero-logo.svg';

const Hero: FC = () => {
  return (
    <div id='hero' className='heros'>
      <img src={logo} alt='NS' />
      <div id='hero-text'>
        <h1>
          Brutally Simple
          <br />
          Dynamic Digital Solutions
        </h1>
      </div>
    </div>
  );
};

export default Hero;
