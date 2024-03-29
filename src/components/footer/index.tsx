import Link from 'next/link';
import { Logo } from '@murciadev/components';
import config from '@murciadev/config';

import styles from './footer.module.css';

import { legalLinks, socialLinks } from './settings';

export default function Footer() {
  const { community } = config;
  const { email } = community;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <Link href="/" className={styles.logo}>
            <Logo />
          </Link>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {socialLinks.map(({ url, title }) => (
              <li className={styles.item} key={url}>
                <a
                  href={url}
                  rel="noopener nofollow noreferrer"
                  target="_blank"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <ul className={styles.list}>
            {legalLinks.map(({ url, title }) => (
              <li className={styles.item} key={url}>
                <Link href={url}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
