import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

import OurWork from '../components/OurWork';

const HomePage = () => {
  return (
    <>
      <main>
        <Hero />
        <AboutUs />
        <OurWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
