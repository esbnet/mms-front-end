import { Container } from './styles';
import Image from 'next/image';
function Content() {
  return (
    <Container>
      <Image src="/images/apple-icon-180x180.png" alt="Logo" width="180" height="180" />
    </Container>
  );
};

export default Content;
