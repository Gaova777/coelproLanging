import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Process from '../sections/Process';
import PortfolioPreview from '../sections/PortfolioPreview';
import Contact from '../sections/Contact';

const HomePage = () => (
  <main id="main">
    <Hero />
    <About />
    <Services />
    <Process />
    <PortfolioPreview />
    <Contact />
  </main>
);

export default HomePage;
