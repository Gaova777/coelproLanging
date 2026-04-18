import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '../data/site';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleAnchor = (target: string) => {
    if (!isHome) {
      navigate(`/#${target}`);
      return;
    }
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const transparent = isHome && !scrolled;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/80 backdrop-blur-xl border-b border-brand-navy/5 shadow-[0_1px_0_rgba(10,46,92,0.04)]'
      }`}
    >
      <div className="container-x">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Ir al inicio">
            <span className={`flex items-center justify-center w-10 h-10 rounded-xl shadow-glow-orange transition-transform group-hover:scale-105 ${transparent ? 'bg-white/15 backdrop-blur-md' : 'bg-gradient-brand'}`}>
              <Logomark light={transparent} />
            </span>
            <span className="flex flex-col leading-none">
              <span className={`font-display text-lg font-semibold tracking-tight ${transparent ? 'text-white' : 'text-brand-navy'}`}>
                {siteConfig.shortName}
              </span>
              <span className={`text-[10px] uppercase tracking-[0.22em] ${transparent ? 'text-white/70' : 'text-brand-stone'}`}>
                S.A.S.
              </span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const linkClass = `relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                transparent ? 'text-white/90 hover:text-white' : 'text-brand-navy/80 hover:text-brand-navy'
              }`;
              if (link.type === 'route') {
                return (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      end
                      className={({ isActive }) =>
                        `${linkClass} ${isActive ? (transparent ? 'text-white' : 'text-brand-orange') : ''}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                );
              }
              return (
                <li key={link.label}>
                  <button onClick={() => handleAnchor(link.target)} className={linkClass}>
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleAnchor('contact')}
              className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-brand text-white text-sm font-semibold shadow-glow-orange hover:shadow-[0_25px_60px_-15px_rgba(243,112,33,0.55)] transition-all duration-500 ease-premium hover:-translate-y-0.5"
            >
              Cotizar ahora
              <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-pulse" aria-hidden />
            </button>
          </div>

          <button
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            className={`md:hidden p-2 rounded-lg transition-colors ${transparent ? 'text-white' : 'text-brand-navy'}`}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <motion.div
        className="h-[2px] origin-left bg-gradient-to-r from-brand-orange via-brand-orange-400 to-brand-navy"
        style={{ scaleX: progress }}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-brand-navy/10 overflow-hidden"
          >
            <ul className="container-x py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.type === 'route' ? (
                    <Link
                      to={link.to}
                      className="block py-3 text-brand-navy hover:text-brand-orange font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleAnchor(link.target)}
                      className="block w-full text-left py-3 text-brand-navy hover:text-brand-orange font-medium transition-colors"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
              <li className="pt-3">
                <button
                  onClick={() => handleAnchor('contact')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-brand text-white font-semibold shadow-glow-orange"
                >
                  Cotizar ahora
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Logomark = ({ light }: { light: boolean }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
    <path d="M5 16V9l7-4 7 4v7" stroke={light ? '#ffffff' : '#ffffff'} strokeWidth="2" strokeLinejoin="round" />
    <path d="M9 16v-4h6v4" stroke={light ? '#ffffff' : '#ffffff'} strokeWidth="1.8" strokeLinejoin="round" opacity=".8" />
  </svg>
);

export default Navbar;
