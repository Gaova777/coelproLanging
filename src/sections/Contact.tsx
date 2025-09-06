import React, { useState } from 'react';
import { Phone, Mail, User, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    setFormStatus('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    // Resetear el formulario después de un tiempo
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0a2e5c] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Contáctanos
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
            <p className="text-lg mb-8 leading-relaxed">
              ¿Listo para iniciar tu próximo proyecto? Contáctanos para una consulta gratuita. Estamos aquí para ayudarte a hacer realidad tus ideas.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="text-[#f37021] mr-4 h-6 w-6" />
                <span className="text-lg">+57 310 123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-[#f37021] mr-4 h-6 w-6" />
                <span className="text-lg">info@coelpro.com</span>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg text-black">
              <h3 className="text-2xl font-semibold text-[#0a2e5c] mb-6">Envíanos un Mensaje</h3>
              <div className="mb-5 relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Nombre" className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f37021]" required />
              </div>
              <div className="mb-5 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="email" placeholder="Correo Electrónico" className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f37021]" required />
              </div>
              <div className="mb-5 relative">
                <MessageCircle className="absolute left-3 top-4 text-gray-400" />
                <textarea placeholder="Mensaje" rows={5} className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f37021]" required></textarea>
              </div>
              <button type="submit" className="w-full bg-[#f37021] hover:bg-[#e55a0a] text-white text-lg font-semibold py-3 rounded-lg transition duration-300">
                Enviar Mensaje
              </button>
              {formStatus && (
                <p className="mt-4 text-center text-green-600">{formStatus}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
