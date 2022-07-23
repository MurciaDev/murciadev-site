import Link from 'next/link';
import { Container, Logo } from '@murciadev/components';

import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>

        <Link href="/code-of-conduct" passHref>
          <a>Código de conducta</a>
        </Link>
      </Container>
    </header>
  );
}
