import React from 'react';
import { CheckCircle } from 'lucide-react';

const Process = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#0a2e5c] text-center mb-16">
          Éxito Garantizado en 4 Fases
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              phase: '01',
              title: 'Diagnóstico y Levantamiento',
              description: 'Visita técnica para identificar necesidades y presentar un informe diagnóstico.'
            },
            {
              phase: '02',
              title: 'Diseño y Planeación',
              description: 'Creación de presupuesto detallado, cronograma de ejecución y firma de contrato.'
            },
            {
              phase: '03',
              title: 'Ejecución de la Obra',
              description: 'Supervisión técnica permanente y reportes periódicos de avances, cumpliendo la normatividad.'
            },
            {
              phase: '04',
              title: 'Entrega y Garantía',
              description: 'Entrega final del proyecto cumpliendo y superando las expectativas, con garantía de satisfacción.'
            }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#f37021] text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {step.phase}
              </div>
              <h3 className="text-xl font-semibold text-[#0a2e5c] mb-4">
                {step.title}
              </h3>
              <p className="text-[#333333] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
