import Link from 'next/link';
import { Container } from './styles';

function Navbar() {
  return (
    <Container>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/Agendamento">Agendamentos</Link></li>
        <li><Link href="/Aluguel">Aluguéis</Link></li>
        <li><Link href="/Evento">Eventos</Link></li>
      </ul>
    </Container>
  );
}

export default Navbar;
