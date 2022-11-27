import Image from 'next/image';
import Link from 'next/link';

import { Container, Button } from '@murciadev/components';

import styles from '../styles/404.module.css';

export default function Page404() {
  return (
    <div className={styles.wrapper}>
      <Container design="narrow">
        <div className={styles.content}>
          <Image
            alt="Página no encontrada"
            src="/images/not-found.webp"
            width={490}
            height={476}
          />
        </div>
        <h1 className={styles.title}>¡Achooo! ¿Ánde vas?</h1>
        <span className={styles.subtitle}>Error 404</span>
        <Link href="/" passHref legacyBehavior>
          <Button as="a">Volver a la página de inicio</Button>
        </Link>
      </Container>
    </div>
  );
}
