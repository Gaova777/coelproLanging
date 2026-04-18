import { motion } from 'framer-motion';
import { ShieldCheck, Award, Clock, Sparkles, type LucideIcon } from 'lucide-react';
import ThreeScene from '../components/ThreeScene';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';

type Commitment = { icon: LucideIcon; title: string; description: string };

const commitments: Commitment[] = [
  {
    icon: Award,
    title: 'Calidad Superior',
    description: 'Materiales certificados y mano de obra especializada en cada entrega.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad Garantizada',
    description: 'Protocolos SST y supervisión continua durante toda la obra.',
  },
  {
    icon: Clock,
    title: 'Eficiencia y Puntualidad',
    description: 'Cronogramas realistas que se cumplen, sin sorpresas.',
  },
  {
    icon: Sparkles,
    title: 'Innovación Constante',
    description: 'Procesos modernos, digitalizados y obsesivos con el detalle.',
  },
];

const About = () => (
  <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial-fade opacity-60 blur-3xl" aria-hidden />
    <Container className="relative">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-28 h-[420px] lg:h-[560px]">
          <ThreeScene />
        </div>

        <div>
          <SectionHeading
            eyebrow="Sobre nosotros"
            align="left"
            title={
              <>
                Construimos con <span className="italic text-brand-orange">criterio técnico</span> y mirada de detalle.
              </>
            }
            description={
              <>
                Somos un equipo de ingenieros y técnicos obsesionados con hacer las cosas bien.
                Cada proyecto se aborda con diagnóstico claro, planificación rigurosa y ejecución supervisada — para que tu obra se entregue a tiempo, dentro del presupuesto y con la calidad que tu operación exige.
              </>
            }
          />

          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {commitments.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-6 rounded-2xl bg-white border border-brand-navy/8 hover:border-brand-orange/40 transition-colors duration-500"
              >
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-orange-50 text-brand-orange group-hover:bg-gradient-brand group-hover:text-white transition-all duration-500">
                    <c.icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-brand-navy mb-1">{c.title}</h3>
                    <p className="text-sm leading-relaxed text-brand-stone">{c.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-navy text-white relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-brand-orange/20 blur-3xl" aria-hidden />
            <div className="relative flex flex-col md:flex-row md:items-center gap-4 justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-2">Nuestra promesa</p>
                <p className="font-display text-xl md:text-2xl leading-snug">
                  "Cada obra que firmamos es una promesa técnica — y la cumplimos."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default About;
