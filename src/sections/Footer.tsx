import { Link } from 'react-router-dom';
import { Linkedin, Instagram, ArrowUpRight, Mail, Phone } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { siteConfig, navLinks } from '../data/site';

const year = new Date().getFullYear();

const Footer = () => (
  <footer className="relative bg-brand-navy-950 text-white overflow-hidden">
    <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-brand-orange/10 blur-3xl rounded-full" aria-hidden />

    <Container className="relative py-20 md:py-24">
      <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
        <div className="lg:col-span-5">
          <Link to="/" className="inline-flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-brand shadow-glow-orange">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
                <path d="M5 16V9l7-4 7 4v7" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
                <path d="M9 16v-4h6v4" stroke="#ffffff" strokeWidth="1.8" strokeLinejoin="round" opacity=".8" />
              </svg>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl font-semibold tracking-tight">{siteConfig.shortName}</span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/60">S.A.S.</span>
            </span>
          </Link>
          <p className="text-white/70 max-w-md leading-relaxed">
            {siteConfig.description}
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-brand-orange hover:border-brand-orange transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-brand-orange hover:border-brand-orange transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs uppercase tracking-[0.22em] text-white/50 mb-5">Navegación</p>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.label}>
                {l.type === 'route' ? (
                  <Link to={l.to} className="text-white/80 hover:text-brand-orange transition-colors">
                    {l.label}
                  </Link>
                ) : (
                  <Link to={`/#${l.target}`} className="text-white/80 hover:text-brand-orange transition-colors">
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.22em] text-white/50 mb-5">Contacto</p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-brand-orange" />
              <a href={`tel:${siteConfig.phoneRaw}`} className="text-white/85 hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-brand-orange" />
              <a href={`mailto:${siteConfig.email}`} className="text-white/85 hover:text-white">
                {siteConfig.email}
              </a>
            </li>
          </ul>

          <Link
            to="/#contact"
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-brand-navy font-semibold hover:bg-brand-orange hover:text-white transition-colors"
          >
            Cotizar proyecto <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/50">
        <p>© {year} {siteConfig.name}. Todos los derechos reservados.</p>
        <p className="font-display italic text-white/40">
          Construido con criterio técnico y amor por el detalle.
        </p>
      </div>
    </Container>
  </footer>
);

export default Footer;
