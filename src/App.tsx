import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import { ScrollToHash } from './components/ScrollToHash';

function App() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portafolio" element={<PortfolioPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
