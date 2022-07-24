import { Container } from '@murciadev/components';

import ContainerHomeNewsletter from './components/homeNewsletter';
import ContainerHomeCover from './components/homeCover';

export default function ContainerHome() {
  return (
    <Container>
      <ContainerHomeCover />
      <ContainerHomeNewsletter />
    </Container>
  );
}
