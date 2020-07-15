import React from 'react';
import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
}

const tooltip: React.FC<TooltipProps> = ({
  title,
  className = '',
  children,
}) => (
  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>
);
export default tooltip;
