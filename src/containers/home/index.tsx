import { Container } from '@murciadev/components';

import ContainerHomeCover from './components/homeCover';
import Newsletter from '../../components/newsletter';

export default function ContainerHome() {
  return (
    <>
      <Container design="inner">
        <ContainerHomeCover />
      </Container>
      <Container>
        <Newsletter />
      </Container>
    </>
  );
}
