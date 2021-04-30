import { Container } from './styles';

import Repositories from '../Repositories';
import Charts from '../Charts';

const Main = () => {
  return (
    <Container>
      <Charts />
      <Repositories />
      
    </Container>
  );
}

export default Main;