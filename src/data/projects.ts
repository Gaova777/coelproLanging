export type ProjectCategory =
  | 'Remodelación'
  | 'Obras Civiles'
  | 'Acabados'
  | 'Sistemas Livianos'
  | 'Mantenimiento';

export type Project = {
  id: number;
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;
  image: string;
  description: string;
  services: string[];
};

export const projectCategories: Array<'Todos' | ProjectCategory> = [
  'Todos',
  'Remodelación',
  'Obras Civiles',
  'Acabados',
  'Sistemas Livianos',
  'Mantenimiento',
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Remodelación Oficinas Corporativas',
    category: 'Remodelación',
    location: 'Bogotá, Colombia',
    year: '2024',
    image:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
    description:
      'Modernización completa de espacios corporativos con acabados de alta calidad, iluminación LED y distribución optimizada.',
    services: ['Remodelación', 'Acabados', 'Iluminación', 'Pintura'],
  },
  {
    id: 2,
    title: 'Centro Comercial — Adecuaciones',
    category: 'Obras Civiles',
    location: 'Medellín, Colombia',
    year: '2024',
    image:
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
    description:
      'Adecuación de locales comerciales con sistemas Drywall, pisos laminados y acabados arquitectónicos modernos.',
    services: ['Drywall', 'Pisos', 'Acabados', 'Adecuaciones'],
  },
  {
    id: 3,
    title: 'Pisos Especializados Industriales',
    category: 'Acabados',
    location: 'Cali, Colombia',
    year: '2023',
    image:
      'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
    description:
      'Instalación de pisos SPC y vinílicos en área industrial, con resistencia superior al tráfico pesado.',
    services: ['Pisos SPC', 'Pisos Vinílicos', 'Preparación de Superficie'],
  },
  {
    id: 4,
    title: 'Construcción Residencial Premium',
    category: 'Obras Civiles',
    location: 'Barranquilla, Colombia',
    year: '2023',
    image:
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
    description:
      'Vivienda unifamiliar con mampostería estructural, acabados de primera calidad y sistemas de impermeabilización.',
    services: ['Mampostería', 'Impermeabilización', 'Acabados', 'Construcción'],
  },
  {
    id: 5,
    title: 'Drywall Corporativo',
    category: 'Sistemas Livianos',
    location: 'Bogotá, Colombia',
    year: '2023',
    image:
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
    description:
      'Sistemas Drywall para división de espacios en oficinas corporativas, con aislamiento acústico certificado.',
    services: ['Drywall', 'Aislamiento Acústico', 'Acabados', 'División de Espacios'],
  },
  {
    id: 6,
    title: 'Mantenimiento Industrial',
    category: 'Mantenimiento',
    location: 'Cartagena, Colombia',
    year: '2024',
    image:
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
    description:
      'Programa de mantenimiento preventivo y correctivo para instalaciones industriales críticas.',
    services: ['Mantenimiento Preventivo', 'Mantenimiento Correctivo', 'Inspección Técnica'],
  },
  {
    id: 7,
    title: 'Remodelación Bodega Industrial',
    category: 'Remodelación',
    location: 'Bucaramanga, Colombia',
    year: '2023',
    image:
      'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
    description:
      'Modernización de bodega con optimización de espacios, iluminación industrial y ventilación mejorada.',
    services: ['Remodelación', 'Iluminación Industrial', 'Ventilación', 'Optimización'],
  },
  {
    id: 8,
    title: 'Acabados Arquitectónicos Premium',
    category: 'Acabados',
    location: 'Pereira, Colombia',
    year: '2024',
    image:
      'https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
    description:
      'Acabados de alta gama con estuco, pintura especializada y detalles decorativos a medida.',
    services: ['Estuco', 'Pintura Especializada', 'Detalles Decorativos', 'Acabados Premium'],
  },
  {
    id: 9,
    title: 'Impermeabilización de Cubiertas',
    category: 'Obras Civiles',
    location: 'Manizales, Colombia',
    year: '2023',
    image:
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop',
    description:
      'Sistema integral de impermeabilización para cubiertas industriales con garantía extendida.',
    services: ['Impermeabilización', 'Cubiertas', 'Garantía Extendida', 'Materiales Premium'],
  },
];
