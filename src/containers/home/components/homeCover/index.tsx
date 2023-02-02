import Image from 'next/image';
import config from '@murciadev/config';
import { Button } from '@murciadev/components';

import styles from './homeCover.module.css';

import imageCharacterLaptop from '../../../../../public/images/character-laptop.webp';

export default function ContainerHomeCover() {
  const {
    links: { discord },
  } = config;

  return (
    <section className={styles.wrapper}>
      <article className={styles.article}>
        <p>
          Somos un grupo de entusiastas del desarrollo y las nuevas tecnologías.
          Nuestro objetivo es compartir nuestro conocimiento y pasión por este
          maravilloso mundo.
        </p>
        <Button as="a" href={discord} target="_blank" rel="noopener nofollow">
          ¡Únete a la comunidad!
        </Button>
      </article>
      <div>
        <Image
          className={styles.illustration}
          alt="Persona con un ordenador portátil sentada en un sillón"
          src={imageCharacterLaptop}
          width={500}
          height={686}
        />
      </div>
    </section>
  );
}
