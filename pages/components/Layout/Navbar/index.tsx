import Link from 'next/link';
import { Container } from './styles';

function Navbar() {
  return (
    <Container>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/agendamento">Agendamento</Link></li>
        <li><Link href="/aluguel">Aluguel</Link></li>
        <li><Link href="/eventos">Eventos</Link></li>
      </ul>
    </Container>
  );
}

export default Navbar;
