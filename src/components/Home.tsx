import AboutUs from './AboutUs';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';

import OurWork from './OurWork';

const Home = () => {
  return (
    <>
      {/* main */}
      <main>
        <Hero />
        <AboutUs />
        <OurWork />
        <Contact />
      </main>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
