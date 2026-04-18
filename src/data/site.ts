export const siteConfig = {
  name: 'COELPRO S.A.S.',
  shortName: 'Coelpro',
  tagline: 'Soluciones integrales en construcción, remodelación y mantenimiento industrial',
  description:
    'Construimos, remodelamos y mantenemos espacios empresariales, comerciales e industriales en Colombia con ingeniería precisa y acabados premium.',
  phone: '+57 310 123 4567',
  phoneRaw: '+573101234567',
  email: 'info@coelpro.com',
  address: 'Colombia',
  social: {
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
  },
  whatsappMessage: 'Hola, quisiera cotizar un proyecto con Coelpro.',
} as const;

export const navLinks = [
  { label: 'Inicio', target: 'home', type: 'route' as const, to: '/' },
  { label: 'Nosotros', target: 'about', type: 'anchor' as const },
  { label: 'Servicios', target: 'services', type: 'anchor' as const },
  { label: 'Proceso', target: 'process', type: 'anchor' as const },
  { label: 'Portafolio', target: 'portfolio', type: 'route' as const, to: '/portafolio' },
  { label: 'Contacto', target: 'contact', type: 'anchor' as const },
];

export const heroVideos = [
  '/video/Video_de_acabados_de_construcción.mp4',
  '/video/Video_Generado_Techo_y_Acabados.mp4',
];

export const heroStats = [
  { value: '3+', label: 'Años de experiencia' },
  { value: '50+', label: 'Proyectos entregados' },
  { value: '100%', label: 'Compromiso de calidad' },
  { value: '24/7', label: 'Soporte técnico' },
];
