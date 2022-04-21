import { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';


import { Container } from './styles';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
        <main>{children} </main>
      <Footer />
    </Container>
  );
};

export default Layout;
