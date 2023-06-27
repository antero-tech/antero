import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import OurWork from './components/OurWork';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurWork />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
