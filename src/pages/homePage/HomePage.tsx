import { FC } from 'react';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Hero from './components/Hero';
import OurWork from './components/OurWork';
import workData from '../../assets/work-cards-data.json';
import './styles.scss';

const HomePage: FC = () => {
  return (
    <main id='homepage' className='pages'>
      <Hero />
      <div id='homepage-container'>
        <div className='contents'>
          <AboutUs />
          <hr />
          <OurWork workData={workData} />
        </div>
      </div>
      <Contact />
    </main>
  );
};

export default HomePage;
