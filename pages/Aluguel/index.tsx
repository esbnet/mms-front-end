import { ReactNode } from 'react';

import { Container } from './styles';

interface AluguelProps {
  children: ReactNode;
}

function Aluguel({ children }: AluguelProps) {
  return (
    <Container>
      <h1>Aluguel</h1>
      {children}
    </Container>
  );
};

export default Aluguel;
