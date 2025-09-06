import React from 'react';
import { Building2, Wrench, PaintBucket, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building2 size={40} />,
      title: "Construcción Civil",
      description: "Edificaciones residenciales, comerciales e industriales con los más altos estándares de calidad."
    },
    {
      icon: <Wrench size={40} />,
      title: "Mantenimiento Industrial",
      description: "Servicios integrales para garantizar la operatividad y eficiencia de tus instalaciones."
    },
    {
      icon: <PaintBucket size={40} />,
      title: "Acabados y Remodelaciones",
      description: "Transformamos tus espacios con acabados de primera y diseños innovadores."
    },
    {
      icon: <Settings size={40} />,
      title: "Soluciones a la Medida",
      description: "Desarrollamos proyectos personalizados que se adaptan a tus necesidades específicas."
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#0a2e5c] text-center mb-16">
          Nuestros Servicios
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-[#f37021] mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0a2e5c] mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-[#333333] text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
