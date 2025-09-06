import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `linear-gradient(rgba(10, 46, 92, 0.7), rgba(10, 46, 92, 0.7)), url('/hero-background.jpg')`
    }}>
      <div className="text-center text-white max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Soluciones Integrales en Construcción y Mantenimiento
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
          Calidad, eficiencia y seguridad en cada proyecto. Tu socio de confianza para resultados excepcionales.
        </p>
        <button 
          onClick={scrollToContact}
          className="bg-[#f37021] hover:bg-[#e55a0a] text-white text-lg font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105"
        >
          Contáctanos
        </button>
      </div>
    </section>
  );
};

export default Hero;
