import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { services } from '../data/services';

const Services = () => (
  <section id="services" className="relative py-24 md:py-32 bg-brand-navy-50/60 overflow-hidden">
    <div className="absolute inset-0 bg-grid-light bg-[size:40px_40px] opacity-[0.04]" aria-hidden />
    <Container className="relative">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <SectionHeading
          eyebrow="Servicios"
          align="left"
          title={
            <>
              Una sola empresa. <br />
              <span className="italic text-brand-orange">Todas las etapas</span> de tu obra.
            </>
          }
          description="Desde la primera visita técnica hasta la entrega final con garantía. Soluciones integrales para el sector empresarial, comercial e industrial."
        />
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors"
        >
          <span className="link-underline">Solicitar cotización</span>
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, i) => (
          <motion.article
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative p-8 md:p-10 rounded-3xl bg-white border border-brand-navy/5 hover:border-brand-orange/30 shadow-soft hover:shadow-card transition-all duration-700 ease-premium overflow-hidden"
          >
            <span
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-orange/0 group-hover:bg-brand-orange/10 blur-3xl transition-colors duration-700"
              aria-hidden
            />

            <div className="relative flex items-start justify-between mb-8">
              <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-navy-50 text-brand-navy group-hover:bg-gradient-brand group-hover:text-white transition-all duration-700 ease-premium shadow-soft">
                <service.icon size={28} strokeWidth={1.8} />
              </span>
              <span className="font-display text-5xl font-semibold text-brand-navy/10 group-hover:text-brand-orange/30 transition-colors duration-700">
                0{i + 1}
              </span>
            </div>

            <h3 className="font-display text-2xl md:text-[1.75rem] font-semibold text-brand-navy leading-tight mb-3">
              {service.title}
            </h3>

            <p className="text-brand-stone leading-relaxed mb-6">{service.description}</p>

            <ul className="space-y-2 mb-8">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-brand-navy/80">
                  <Check size={16} className="text-brand-orange flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">
              <span className="link-underline">Conocer más</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-500 ease-premium group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
);

export default Services;
