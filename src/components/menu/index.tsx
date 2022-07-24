import Link from 'next/link';

import styles from './menu.module.css';

const menuRoutes = [
  // {
  //   url: '/community',
  //   title: 'comunidad',
  // },
  // {
  //   url: '/events',
  //   title: 'eventos',
  // },
  {
    url: '/tech-hub',
    title: 'tech hub',
  },
];

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        {menuRoutes.map(({ url, title }) => (
          <li className={styles.item} key={url}>
            <Link href={url} passHref>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
