import { Container } from "./styles";
import Image from "next/image";

function Logo() {
  return (
    <Container>
      <Image src="/images/android-icon-48x48.png" alt="Logo" width="48" height="48" />
    </Container>
  );
}

export default Logo;
