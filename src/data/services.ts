import { Building2, Wrench, PaintBucket, Settings, type LucideIcon } from 'lucide-react';

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    id: 'civil',
    icon: Building2,
    title: 'Construcción Civil',
    description:
      'Edificaciones residenciales, comerciales e industriales ejecutadas con los más altos estándares de ingeniería y normativa colombiana.',
    highlights: ['Mampostería estructural', 'Cimentaciones', 'Impermeabilización'],
  },
  {
    id: 'maintenance',
    icon: Wrench,
    title: 'Mantenimiento Industrial',
    description:
      'Servicios preventivos y correctivos que garantizan la operatividad continua de tus instalaciones con tiempos de respuesta controlados.',
    highlights: ['Preventivo', 'Correctivo', 'Inspección técnica'],
  },
  {
    id: 'finishes',
    icon: PaintBucket,
    title: 'Acabados y Remodelaciones',
    description:
      'Transformamos espacios con acabados de primera calidad, diseño contemporáneo y atención obsesiva al detalle final.',
    highlights: ['Pisos SPC & vinílicos', 'Drywall & estuco', 'Pintura especializada'],
  },
  {
    id: 'custom',
    icon: Settings,
    title: 'Soluciones a la Medida',
    description:
      'Proyectos personalizados alineados a tus procesos, normativa y presupuesto, con gestión transparente de principio a fin.',
    highlights: ['Gestión integral', 'Diseño a medida', 'Supervisión técnica'],
  },
];
