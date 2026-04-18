import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'light',
}: SectionHeadingProps) => {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-brand-navy';
  const descColor = theme === 'dark' ? 'text-white/70' : 'text-brand-stone';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-5 max-w-3xl ${alignment}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`heading-display text-4xl md:text-5xl ${titleColor}`}>{title}</h2>
      {description && (
        <p className={`text-lg leading-relaxed ${descColor}`}>{description}</p>
      )}
    </motion.div>
  );
};
