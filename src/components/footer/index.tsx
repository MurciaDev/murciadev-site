import { Container, Logo } from '@murciadev/components';
import config from '@murciadev/config';

import styles from './footer.module.css';

export default function Footer() {
  const { community } = config;
  const { email } = community;

  return (
    <footer className={styles.footer}>
      <Container>
        <Logo />
        <br />
        <a href={`mailto:${email}`}>{email}</a>
      </Container>
    </footer>
  );
}
