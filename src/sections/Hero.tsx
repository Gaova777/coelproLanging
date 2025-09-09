import { useEffect, useState } from 'react';

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  // Lista de videos disponibles en la carpeta public/video
  const videos = [
    '/video/Video_de_acabados_de_construcción.mp4',
    '/video/Video_Generado_Techo_y_Acabados.mp4'
    // Agrega más videos según los archivos que tengas
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cambiar video cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => 
        (prevIndex + 1) % videos.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <video
        key={currentVideoIndex}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        {/* Fallback para navegadores que no soporten video */}
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Capa opaca oscura encima del video */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Contenido del hero */}
      <div className="relative z-20 text-center text-white max-w-4xl px-6">
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
