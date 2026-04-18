import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { processSteps } from '../data/process';

const Process = () => (
  <section id="process" className="relative py-24 md:py-32 bg-white overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-radial-fade opacity-40 blur-3xl pointer-events-none" aria-hidden />
    <Container className="relative">
      <SectionHeading
        eyebrow="Cómo trabajamos"
        title={
          <>
            Éxito garantizado <br />
            en <span className="italic text-brand-orange">4 fases claras</span>.
          </>
        }
        description="Un proceso pensado para que sepas exactamente qué esperar en cada etapa — sin sobresaltos, sin ambigüedades."
      />

      <div className="relative mt-20">
        <div className="hidden lg:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-navy/15 to-transparent" aria-hidden />

        <ol className="grid gap-10 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.li
              key={step.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              <div className="relative flex items-center justify-center mb-6">
                <span className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-brand text-white font-display text-xl font-semibold shadow-glow-orange group-hover:scale-105 transition-transform duration-500 ease-premium">
                  {step.phase}
                </span>
                {i < processSteps.length - 1 && (
                  <span
                    className="hidden lg:block absolute left-1/2 top-1/2 translate-x-8 -translate-y-1/2 w-[calc(100%-2rem)] h-px bg-gradient-to-r from-brand-orange/40 to-transparent"
                    aria-hidden
                  />
                )}
              </div>
              <div className="text-center">
                <h3 className="font-display text-xl font-semibold text-brand-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-stone text-[15px] leading-relaxed">{step.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Container>
  </section>
);

export default Process;
