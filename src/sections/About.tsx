
import { CheckCircle } from 'lucide-react';
import ThreeScene from '../components/ThreeScene';

const About = () => {
  const commitments = [
    "Calidad Superior",
    "Seguridad Garantizada",
    "Eficiencia y Puntualidad",
    "Innovación Constante"
  ];

  return (
    <section id="about" className="py-20 bg-[#E1E1DB]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#0a2e5c] text-center mb-16">
          Sobre Nosotros
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-full">
            <ThreeScene />
          </div>
          <div>
            <p className="text-[#82847C] text-lg leading-relaxed mb-8 font-medium">
              Somos una empresa líder en el sector de la construcción y mantenimiento, comprometida con la excelencia y la satisfacción del cliente. Con años de experiencia, nuestro equipo de profesionales altamente cualificados se dedica a ofrecer soluciones innovadoras y sostenibles para una amplia gama de proyectos.
            </p>
            <h3 className="text-2xl font-semibold text-[#0a2e5c] mb-6">Nuestro Compromiso</h3>
            <ul className="space-y-4">
              {commitments.map((commitment, index) => (
                <li key={index} className="flex items-center text-[#333333] text-lg">
                  <CheckCircle className="text-[#f37021] mr-3 h-6 w-6 flex-shrink-0" />
                  <span>{commitment}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;