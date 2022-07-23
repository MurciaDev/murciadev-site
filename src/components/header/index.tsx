import Link from 'next/link';
import config from '@murciadev/config';
import { Logo } from '@murciadev/components';

import Menu from '../menu';

import styles from './header.module.css';

export default function Header() {
  const { community } = config;
  const { email } = community;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" passHref>
          <a className={styles.logo}>
            <Logo />
          </a>
        </Link>
        <Menu />
        <a className={styles.email} href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </header>
  );
}
