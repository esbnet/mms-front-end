import { ReactNode } from 'react';

import { Container } from './styles';

interface AgendamentoProps {
  children: ReactNode;
}

function Agendamento({ children }: AgendamentoProps) {
  return (
    <Container>
      <h1>Agendamento</h1>
      {children}
    </Container>
  );
};

export default Agendamento;
