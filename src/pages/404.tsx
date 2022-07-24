import Image from 'next/image';
import Link from 'next/link';

import { Container, Button } from '@murciadev/components';

import styles from '../styles/404.module.css';

import imageNotFound from '../../public/images/not-found.webp';

export default function Page404() {
  return (
    <div className={styles.wrapper}>
      <Container design="narrow">
        <div className={styles.content}>
          <Image
            src={imageNotFound}
            alt="Página no encontrada"
            placeholder="blur"
          />
        </div>
        <h1 className={styles.title}>¡Achooo! ¿Ánde vas?</h1>
        <span className={styles.subtitle}>Error 404</span>
        <Link href="/" passHref>
          <Button as="a">Volver a la página de inicio</Button>
        </Link>
      </Container>
    </div>
  );
}
