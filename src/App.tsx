import { useState } from 'react';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Process from './sections/Process';
import PortfolioPreview from './sections/PortfolioPreview';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'portfolio'>('home');

  if (currentPage === 'portfolio') {
    return (
      <>
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <Portfolio onNavigate={setCurrentPage} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <PortfolioPreview onNavigate={setCurrentPage} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;