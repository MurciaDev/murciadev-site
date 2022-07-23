import Image from 'next/image';
import { Container } from '@murciadev/components';
import styles from '../styles/404.module.css';

export default function Page404() {
  return (
    <div className={styles['page-404']}>
      <Container>
        <Image
          src="/images/not-found.webp"
          alt="Murcia existe"
          width={1608}
          height={842}
        />
        404 | Not found
      </Container>
    </div>
  );
}
