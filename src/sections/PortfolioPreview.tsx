import React from 'react';

type PortfolioPreviewProps = {
  onNavigate: (page: 'home' | 'portfolio') => void;
};

const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({ onNavigate }) => {
  return (
    <section id="portfolio-preview" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#0a2e5c] text-center mb-16">
          Conoce Nuestro Trabajo
        </h2>
        <div className="text-center mb-12">
          <button
            onClick={() => onNavigate('portfolio')}
            className="bg-[#f37021] hover:bg-[#e55a0a] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Ver Portafolio Completo
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop', title: 'Acabados Arquitectónicos' },
            { image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop', title: 'Remodelación de Oficinas' },
            { image: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop', title: 'Instalación de Pisos' },
            { image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop', title: 'Obras Civiles' },
            { image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop', title: 'Sistemas Drywall' },
            { image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop', title: 'Mantenimiento Integral' }
          ].map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-[#0a2e5c] bg-opacity-0 group-hover:bg-opacity-80 transition duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition duration-300 text-center px-4">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
