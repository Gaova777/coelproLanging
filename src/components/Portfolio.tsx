import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, MapPin } from 'lucide-react';

interface PortfolioProps {
  onNavigate: (page: 'home' | 'portfolio') => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  const projects = [
    {
      id: 1,
      title: 'Remodelación Oficinas Corporativas',
      category: 'Remodelación',
      location: 'Bogotá, Colombia',
      year: '2024',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Modernización completa de espacios corporativos con acabados de alta calidad, sistemas de iluminación LED y distribución optimizada de espacios.',
      services: ['Remodelación', 'Acabados', 'Iluminación', 'Pintura']
    },
    {
      id: 2,
      title: 'Centro Comercial - Adecuaciones',
      category: 'Obras Civiles',
      location: 'Medellín, Colombia',
      year: '2024',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Adecuación de locales comerciales con instalación de sistemas Drywall, pisos laminados y acabados arquitectónicos modernos.',
      services: ['Drywall', 'Pisos', 'Acabados', 'Adecuaciones']
    },
    {
      id: 3,
      title: 'Instalación de Pisos Especializados',
      category: 'Acabados',
      location: 'Cali, Colombia',
      year: '2023',
      image: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Instalación de pisos SPC y vinílicos en área industrial, garantizando durabilidad y resistencia a alto tráfico.',
      services: ['Pisos SPC', 'Pisos Vinílicos', 'Preparación de Superficie']
    },
    {
      id: 4,
      title: 'Construcción Residencial',
      category: 'Obras Civiles',
      location: 'Barranquilla, Colombia',
      year: '2023',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Construcción de vivienda unifamiliar con mampostería estructural, acabados de primera calidad y sistemas de impermeabilización.',
      services: ['Mampostería', 'Impermeabilización', 'Acabados', 'Construcción']
    },
    {
      id: 5,
      title: 'Sistemas Drywall Corporativo',
      category: 'Sistemas Livianos',
      location: 'Bogotá, Colombia',
      year: '2023',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Instalación de sistemas Drywall para división de espacios en oficinas corporativas, incluyendo aislamiento acústico.',
      services: ['Drywall', 'Aislamiento Acústico', 'Acabados', 'División de Espacios']
    },
    {
      id: 6,
      title: 'Mantenimiento Industrial',
      category: 'Mantenimiento',
      location: 'Cartagena, Colombia',
      year: '2024',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Programa de mantenimiento preventivo y correctivo para instalaciones industriales, garantizando operatividad continua.',
      services: ['Mantenimiento Preventivo', 'Mantenimiento Correctivo', 'Inspección Técnica']
    },
    {
      id: 7,
      title: 'Remodelación de Bodega Industrial',
      category: 'Remodelación',
      location: 'Bucaramanga, Colombia',
      year: '2023',
      image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Modernización de bodega industrial con optimización de espacios, mejora de iluminación y sistemas de ventilación.',
      services: ['Remodelación', 'Iluminación Industrial', 'Ventilación', 'Optimización']
    },
    {
      id: 8,
      title: 'Acabados Arquitectónicos Premium',
      category: 'Acabados',
      location: 'Pereira, Colombia',
      year: '2024',
      image: 'https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Aplicación de acabados arquitectónicos de alta gama incluyendo estuco, pintura especializada y detalles decorativos.',
      services: ['Estuco', 'Pintura Especializada', 'Detalles Decorativos', 'Acabados Premium']
    },
    {
      id: 9,
      title: 'Impermeabilización de Cubiertas',
      category: 'Obras Civiles',
      location: 'Manizales, Colombia',
      year: '2023',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Sistema integral de impermeabilización para cubiertas industriales con garantía extendida y materiales de primera calidad.',
      services: ['Impermeabilización', 'Cubiertas', 'Garantía Extendida', 'Materiales Premium']
    }
  ];

  const categories = ['Todos', 'Remodelación', 'Obras Civiles', 'Acabados', 'Sistemas Livianos', 'Mantenimiento'];
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');

  const filteredProjects = selectedCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <section className="bg-[#0a2e5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center text-[#f37021] hover:text-white mb-8 transition duration-300"
          >
            <ArrowLeft className="mr-2" size={20} />
            Volver al Inicio
          </button>
          <h1 className="text-5xl font-bold mb-6">Nuestro Portafolio</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Descubre los proyectos que hemos realizado con éxito. Cada obra refleja nuestro compromiso 
            con la calidad, innovación y satisfacción del cliente.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#f37021] text-white'
                    : 'bg-white text-[#333333] hover:bg-[#f37021] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transform hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#f37021] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a2e5c] mb-3">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-[#666666] text-sm mb-2">
                    <MapPin size={16} className="mr-2" />
                    {project.location}
                  </div>
                  
                  <div className="flex items-center text-[#666666] text-sm mb-4">
                    <Calendar size={16} className="mr-2" />
                    {project.year}
                  </div>
                  
                  <p className="text-[#333333] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#0a2e5c] mb-2">Servicios:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => (
                        <span 
                          key={index}
                          className="bg-[#f8f9fa] text-[#333333] px-3 py-1 rounded-full text-xs"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="flex items-center text-[#f37021] hover:text-[#e55a0a] font-medium transition duration-300">
                    Ver Detalles
                    <ExternalLink size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#0a2e5c] text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para tu Próximo Proyecto?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Cada proyecto es único y merece atención especializada. Contáctanos para una consulta gratuita.
          </p>
          <button
            onClick={() => onNavigate('home')}
            className="bg-[#f37021] hover:bg-[#e55a0a] text-white text-lg font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Solicitar Cotización
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;