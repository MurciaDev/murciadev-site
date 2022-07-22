import Image from 'next/image';
import { Button } from '@murciadev/components';

import styles from './homeNewsletter.module.css';

export default function ContainerHomeNewsletter() {
  return (
    <section className={styles.wrapper}>
      <div>
        <Image
          src="/images/megaphone-speaker.webp"
          alt="Megáfono"
          width={568}
          height={538}
        />
      </div>
      <article className={styles.article}>
        <p>
          Por ahora, estamos tratando de organizar una comunidad en línea
          alrededor de nuestro servidor Discord, pero en el futuro, queremos
          realizar charlas y talleres sobre desarrollo frontend/backend/mobile.
        </p>
        <p>
          Si quieres estar al tanto de todas las novedades que hacemos y estamos
          preparando, ¡tenemos una newsletter muy molona!
        </p>
        <Button as="a" href="#">
          ¡Suscríbete a nuestra newsletter!
        </Button>
      </article>
    </section>
  );
}
