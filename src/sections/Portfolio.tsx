import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      image: "/portfolio-1.jpg",
      title: "Edificio Corporativo",
      description: "Construcción integral de sede corporativa."
    },
    {
      image: "/portfolio-2.jpg",
      title: "Planta Industrial",
      description: "Mantenimiento mayor de maquinaria y estructura."
    },
    {
      image: "/portfolio-3.jpg",
      title: "Residencia de Lujo",
      description: "Remodelación completa y acabados de alta gama."
    },
    {
      image: "/portfolio-4.jpg",
      title: "Centro Comercial",
      description: "Expansión y modernización de áreas comunes."
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#0a2e5c] text-center mb-16">
          Portafolio de Proyectos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
