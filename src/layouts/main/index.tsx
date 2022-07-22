import { type ReactNode } from 'react';
import Link from 'next/link';
import config from '@murciadev/config';
import { Logo, Container } from '@murciadev/components';

import styles from './main.module.css';

interface LayoutMainProps {
  children: ReactNode;
}

export default function LayoutMain({ children }: LayoutMainProps) {
  const {
    community: { email },
  } = config;

  return (
    <>
      <header className={styles.header}>
        <Container>
          <Link href="/" passHref>
            <a>
              <Logo />
            </a>
          </Link>
        </Container>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <Container>
          <Logo />
          <br />
          <a href={`mailto:${email}`}>{email}</a>
        </Container>
      </footer>
    </>
  );
}
