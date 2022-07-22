import { useMemo } from 'react';
import Link from 'next/link';
import { Button, List } from '@murciadev/components';

import styles from './home.module.css';
import { discordUrl, links } from './settings';

export default function ContainerHome() {
  const itemsToAnchors = useMemo(() => {
    return links.map(({ title, url }) => (
      <a key={url} href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    ));
  }, []);

  return (
    <div className={styles.wrapper}>
      <svg className={styles.logo} width="130" height="68">
        <path d="M80.285.27c1.05.353 2.2 1.396 2.76 2.507.389.808.44 1.077.372 2.222l-.068 1.313-13.728 29.54c-14.93 32.131-14.236 30.734-16.047 31.576-1.015.488-2.674.538-3.86.134-1.049-.353-2.2-1.397-2.758-2.508-.39-.807-.44-1.077-.373-2.221l.068-1.313L59.99 32.822C67.336 17.034 73.565 3.669 73.836 3.114c.762-1.515 1.608-2.306 3.098-2.895.727-.286 2.437-.253 3.351.05zM35.09 1.615c1.1.37 2.353 1.532 2.827 2.626.541 1.211.524 2.76-.017 3.921-.457.993-.17.707-14.66 14.896C17.165 29.018 12.188 33.933 12.188 34c0 .05 5.671 5.655 12.611 12.455 14.016 13.718 13.508 13.146 13.508 15.317 0 2.895-2.319 5.016-5.264 4.848-.745-.034-1.388-.185-1.896-.455-.847-.42-.796-.387-18.315-17.572C1.405 37.366.677 36.61.32 35.717c-.49-1.33-.389-2.878.288-4.057.339-.572 4.875-5.133 14.862-14.912C23.36 9.005 30.08 2.49 30.384 2.272c1.185-.909 3.165-1.178 4.706-.656zm63.798.202c1.117.555 29.775 28.597 30.52 29.876.457.774.507 1.027.507 2.222 0 1.094-.084 1.498-.423 2.188-.338.656-3.538 3.888-15.065 15.216-16.284 15.973-15.539 15.333-17.773 15.333-2.793 0-4.977-2.17-4.96-4.914 0-2.155-.474-1.6 13.508-15.284 6.94-6.783 12.61-12.405 12.61-12.455 0-.067-4.925-4.949-10.951-10.856C92.388 8.988 92.557 9.156 92.1 8.164c-.542-1.162-.56-2.71-.018-3.922.457-1.044 1.71-2.239 2.76-2.626 1.049-.387 3.03-.286 4.045.202z" />
      </svg>
      <h1 className={styles.title}>MurciaDev</h1>
      <p className={styles.description}>
        Apasionadas y apasionados del desarrollo y de las tecnologías web en
        Murcia y alrededores.
      </p>
      <List items={itemsToAnchors} />
      <p className={styles.email}>
        <a
          href="mailto:hello@murcia.dev"
          rel="noopener noreferrer"
          target="_blank"
        >
          hello@murcia.dev
        </a>
      </p>
      <Link href="https://discord.com/invite/c7CzDtc47U">
        <Button>¡Accede a nuestro Discord!</Button>
      </Link>
    </div>
  );
}
