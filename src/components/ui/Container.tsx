import { type HTMLAttributes } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: 'div' | 'section' | 'article';
};

export const Container = ({ as: Tag = 'div', className = '', ...rest }: ContainerProps) => (
  <Tag className={`container-x ${className}`} {...rest} />
);
