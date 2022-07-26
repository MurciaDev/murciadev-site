import Image from 'next/image';
import config from '@murciadev/config';
import { Button } from '@murciadev/components';

import styles from './newsletter.module.css';

import imageMegaphoneSpeaker from '../../../public/images/megaphone-speaker.webp';

export default function Newsletter() {
  const {
    links: { newsletter },
  } = config;

  return (
    <section className={styles.wrapper}>
      <div className={styles.image}>
        <Image
          src={imageMegaphoneSpeaker}
          alt="Megáfono"
          width={420}
          height={440}
        />
      </div>
      <article className={styles.article}>
        <p>
          Estamos muy activos con nuestra comunidad en línea alrededor de
          nuestro servidor Discord, pero también realizamos charlas, talleres y
          cualquier tipo de evento relacionado sobre el desarrollo
          frontend/backend/mobile.
        </p>
        <p>
          Si quieres estar al tanto de todas las novedades que hacemos y estamos
          preparando, ¡tenemos una newsletter muy molona!
        </p>
        <Button
          as="a"
          href={newsletter}
          target="_blank"
          rel="noopener nofollow"
        >
          ¡Suscríbete a nuestra newsletter!
        </Button>
      </article>
    </section>
  );
}
