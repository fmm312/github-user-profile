import { Block, Container, Divider } from './styles';

import Pie from './Pie';
import Starred from './Bar';
import Doughnut from './Doughnut';

const Graphics = () => {
  return (
    <Container>
      <Block>
        <h2>Top Languages</h2>
        <Pie />
      </Block>

      <Block>
        <h2>Most Starred</h2>
        <Divider />
        <Starred />
      </Block>

      <Block>
        <h2>Stars per Language</h2>
        <Doughnut />
      </Block>
    </Container>
  );
}

export default Graphics;