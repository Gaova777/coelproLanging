import React from 'react';
import { Linkedin as LinkedIn, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#082244] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-lg mb-4 md:mb-0">&copy; 2025 Coelpro SAS. Todos los derechos reservados.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-[#f37021] transition duration-300">
            <LinkedIn size={28} />
          </a>
          <a href="#" className="hover:text-[#f37021] transition duration-300">
            <Instagram size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
