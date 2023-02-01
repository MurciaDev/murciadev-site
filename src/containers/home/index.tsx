import { Container } from '@murciadev/components';

import ContainerHomeCover from './components/homeCover';
import CallToAction from '../../components/callToAction';

export default function ContainerHome() {
  return (
    <>
      <Container design="inner">
        <ContainerHomeCover />
      </Container>
      <Container>
        <CallToAction />
      </Container>
    </>
  );
}
