export type ProcessStep = {
  phase: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    phase: '01',
    title: 'Diagnóstico y Levantamiento',
    description:
      'Visita técnica para identificar necesidades, medir variables críticas y presentar un informe diagnóstico claro.',
  },
  {
    phase: '02',
    title: 'Diseño y Planeación',
    description:
      'Presupuesto detallado, cronograma realista, planos técnicos y firma de contrato antes de mover un solo ladrillo.',
  },
  {
    phase: '03',
    title: 'Ejecución de la Obra',
    description:
      'Supervisión técnica permanente, reportes periódicos y cumplimiento estricto de la normatividad vigente.',
  },
  {
    phase: '04',
    title: 'Entrega y Garantía',
    description:
      'Entrega final con lista de verificación, capacitación al cliente y garantía escrita de satisfacción.',
  },
];

export const commitments = [
  'Calidad Superior',
  'Seguridad Garantizada',
  'Eficiencia y Puntualidad',
  'Innovación Constante',
];
