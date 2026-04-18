import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, MoveDown } from 'lucide-react';
import { heroVideos, heroStats, siteConfig } from '../data/site';

const Hero = () => {
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setVideoIndex((i) => (i + 1) % heroVideos.length);
    }, 12000);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden noise-overlay"
      aria-label="Presentación de Coelpro"
    >
      <video
        key={videoIndex}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover scale-105 motion-safe:animate-[kenburns_20s_ease-in-out_infinite_alternate]"
      >
        <source src={heroVideos[videoIndex]} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-brand-navy/60 to-brand-navy-950/95" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(243,112,33,0.25),transparent_50%)]" aria-hidden />
      <div className="absolute inset-0 bg-grid-light bg-[size:48px_48px] opacity-[0.06]" aria-hidden />

      <div className="container-x relative z-10 pt-32 pb-24 md:pb-32 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs uppercase tracking-[0.2em] font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" aria-hidden />
              Construcción · Remodelación · Mantenimiento
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] tracking-[-0.03em]"
            >
              Construimos espacios que{' '}
              <span className="relative inline-block">
                <span className="italic text-brand-orange-300">trabajan</span>
                <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden>
                  <path d="M2 9 Q50 2 100 6 T198 4" stroke="#f37021" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              para tu negocio.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 max-w-xl text-lg md:text-xl text-white/80 leading-relaxed"
            >
              Ingeniería precisa, acabados premium y entregas a tiempo.
              Tu socio de confianza para obras industriales, comerciales y corporativas en Colombia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollTo('contact')}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-brand text-white font-semibold shadow-glow-orange hover:shadow-[0_30px_80px_-15px_rgba(243,112,33,0.7)] transition-all duration-500 ease-premium hover:-translate-y-0.5"
              >
                Solicitar cotización
                <ArrowRight size={18} className="transition-transform duration-500 ease-premium group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo('services')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/25 text-white hover:bg-white/10 backdrop-blur-sm transition-colors"
              >
                <Play size={16} className="fill-white" />
                Ver nuestros servicios
              </button>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="lg:col-span-4 grid grid-cols-2 gap-px rounded-2xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/15"
          >
            {heroStats.map((s) => (
              <div key={s.label} className="bg-brand-navy-950/40 p-5 md:p-6">
                <p className="font-display text-3xl md:text-4xl font-semibold text-white">{s.value}</p>
                <p className="text-[11px] mt-1 uppercase tracking-[0.18em] text-white/60">{s.label}</p>
              </div>
            ))}
          </motion.aside>
        </div>

        <motion.button
          onClick={() => scrollTo('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          aria-label="Desplazarse a la siguiente sección"
          className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Explorar</span>
          <MoveDown size={16} className="animate-bounce" />
        </motion.button>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" aria-hidden />

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1.05) translate(0,0); }
          100% { transform: scale(1.12) translate(-1%, -1%); }
        }
      `}</style>

      <span className="sr-only">{siteConfig.tagline}</span>
    </section>
  );
};

export default Hero;
