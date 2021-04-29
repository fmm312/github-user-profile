import { Container } from './styles';

import Repositories from '../Repositories';
import Charts from '../Charts';
import Footer from '../Footer';

const Main = () => {
  return (
    <Container>
      <Charts />
      <Repositories />
      <Footer />
    </Container>
  );
}

export default Main;