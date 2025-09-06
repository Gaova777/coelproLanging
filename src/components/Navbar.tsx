import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'portfolio';
  onNavigate: (page: 'home' | 'portfolio') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handlePortfolioClick = () => {
    onNavigate('portfolio');
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    onNavigate('home');
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Inicio', action: () => handleHomeClick() },
    { label: 'Nosotros', action: () => scrollToSection('about') },
    { label: 'Servicios', action: () => scrollToSection('services') },
    { label: 'Proceso', action: () => scrollToSection('process') },
    { label: 'Portafolio', action: () => handlePortfolioClick() },
    { label: 'Contacto', action: () => scrollToSection('contact') }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-[#f37021]" />
            <span className="ml-2 text-xl font-bold text-[#333333]">Coelpro SAS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="text-[#333333] hover:text-[#f37021] font-medium transition duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f37021] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#f37021] hover:bg-[#e55a0a] text-white px-6 py-2 rounded-lg font-medium transition duration-300 transform hover:scale-105"
            >
              Cotizar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#333333] hover:text-[#f37021] transition duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="block w-full text-left px-4 py-3 text-[#333333] hover:text-[#f37021] hover:bg-gray-50 transition duration-300"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 bg-[#f37021] hover:bg-[#e55a0a] text-white font-medium transition duration-300 mx-4 rounded-lg"
              >
                Cotizar
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;