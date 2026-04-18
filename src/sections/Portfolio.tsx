import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { projects, projectCategories } from '../data/projects';

const Portfolio = () => {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>('Todos');

  const filtered = useMemo(
    () => (category === 'Todos' ? projects : projects.filter((p) => p.category === category)),
    [category],
  );

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-brand-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-light bg-[size:48px_48px] opacity-[0.06]" aria-hidden />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/15 blur-3xl rounded-full" aria-hidden />
        <Container className="relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <span className="eyebrow text-brand-orange-300">Portafolio</span>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.025em]">
                Proyectos que demuestran <br />
                <span className="italic text-brand-orange-300">lo que podemos hacer</span> por ti.
              </h1>
            </div>
            <p className="lg:col-span-4 text-white/70 text-lg leading-relaxed">
              Cada obra refleja nuestro compromiso con la calidad, la innovación y la satisfacción del cliente. Filtra por categoría para explorar.
            </p>
          </div>
        </Container>
      </section>

      <section className="sticky top-20 z-30 bg-white/85 backdrop-blur-xl border-b border-brand-navy/5">
        <Container>
          <div className="py-5 flex flex-wrap justify-center gap-2">
            {projectCategories.map((c) => {
              const active = c === category;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-500 ease-premium ${
                    active
                      ? 'bg-brand-navy text-white shadow-glow-navy'
                      : 'bg-brand-navy-50 text-brand-navy hover:bg-brand-orange hover:text-white'
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((project, i) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-brand-navy/8 hover:border-brand-orange/30 shadow-soft hover:shadow-card transition-all duration-700 ease-premium"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} — obra ejecutada por Coelpro en ${project.location}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-premium group-hover:scale-110"
                    />
                    <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-navy">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6 md:p-7">
                    <h3 className="font-display text-xl md:text-[1.35rem] font-semibold text-brand-navy leading-tight mb-3">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-4 text-xs text-brand-stone mb-4">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} />
                        {project.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={14} />
                        {project.year}
                      </span>
                    </div>

                    <p className="text-sm text-brand-stone leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.services.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 rounded-full bg-brand-navy-50 text-brand-navy text-[11px] font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors"
                    >
                      <span className="link-underline">Ver detalles</span>
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-500 ease-premium group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      <section className="relative py-24 md:py-28 bg-gradient-navy text-white overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-brand-orange/15 blur-3xl rounded-full" aria-hidden />
        <Container className="relative text-center max-w-3xl">
          <span className="eyebrow text-brand-orange-300">¿Siguiente proyecto?</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Hablemos de tu <span className="italic text-brand-orange-300">próxima obra</span>.
          </h2>
          <p className="mt-6 text-white/70 text-lg">
            Cada proyecto es único y merece atención especializada. Cotiza con nosotros sin compromiso.
          </p>
          <Link
            to="/#contact"
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-brand text-white font-semibold shadow-glow-orange hover:-translate-y-0.5 transition-all duration-500 ease-premium"
          >
            Solicitar cotización
            <ArrowUpRight size={18} />
          </Link>
        </Container>
      </section>
    </>
  );
};

export default Portfolio;
