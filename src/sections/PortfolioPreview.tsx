import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { projects } from '../data/projects';

const featured = projects.slice(0, 6);

const PortfolioPreview = () => (
  <section id="portfolio" className="relative py-24 md:py-32 bg-brand-navy-950 text-white overflow-hidden">
    <div className="absolute inset-0 bg-grid-light bg-[size:48px_48px] opacity-[0.05]" aria-hidden />
    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-orange/15 blur-3xl" aria-hidden />

    <Container className="relative">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <SectionHeading
          theme="dark"
          eyebrow="Portafolio"
          align="left"
          title={
            <>
              Obras que hablan por <span className="italic text-brand-orange-300">sí solas</span>.
            </>
          }
          description="Una muestra de los proyectos que hemos entregado en los últimos años — industrial, comercial y corporativo."
        />
        <Link
          to="/portafolio"
          className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-brand-navy font-semibold hover:bg-brand-orange hover:text-white transition-colors duration-500 self-start md:self-end whitespace-nowrap"
        >
          Ver todo el portafolio
          <ArrowUpRight size={18} className="transition-transform duration-500 ease-premium group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 [grid-auto-rows:220px]">
        {featured.map((project, i) => {
          const patterns = [
            'md:col-span-3 md:row-span-2',
            'md:col-span-3 md:row-span-1',
            'md:col-span-2 md:row-span-1',
            'md:col-span-2 md:row-span-2',
            'md:col-span-2 md:row-span-1',
            'md:col-span-2 md:row-span-1',
          ];
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-3xl bg-brand-navy-800 ${patterns[i]}`}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-premium group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" aria-hidden />

              <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-end">
                <span className="inline-flex items-center self-start px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.2em] text-white mb-3">
                  {project.category}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70 mt-1">
                  {project.location} · {project.year}
                </p>
              </div>

              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-[-4px] group-hover:translate-y-0 transition-all duration-500 ease-premium">
                <ArrowUpRight size={18} className="text-white" />
              </div>
            </motion.article>
          );
        })}
      </div>
    </Container>
  </section>
);

export default PortfolioPreview;
