import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

import OurWork from '../components/OurWork';
import workData from '../assets/work-cards-data.json';

const HomePage = () => {
  return (
    <>
      <main>
        <Hero />
        <AboutUs />
        <OurWork workData={workData} />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
