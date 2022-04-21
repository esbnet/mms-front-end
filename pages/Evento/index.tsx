import { ReactNode } from 'react';

import { Container } from './styles';

interface EventoProps {
  children: ReactNode;
}

function Evento({ children }: EventoProps) {
  return (
    <Container>
      <h1>Evento</h1>
      {children}
    </Container>
  );
};

export default Evento;