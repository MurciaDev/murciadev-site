import Image from 'next/image';
import { Button } from '@murciadev/components';

import styles from './homeCover.module.css';

export default function ContainerHomeCover() {
  return (
    <section className={styles.wrapper}>
      <article className={styles.article}>
        <p>
          Somos un grupo de entusiastas del desarrollo y las nuevas tecnologías.
          Nuestro objetivo es compartir nuestro conocimiento y pasión por este
          maravilloso mundo.
        </p>
        <Button as="a" href="#">
          ¡Únete a la comunidad!
        </Button>
      </article>
      <div>
        <Image
          src="/images/character-laptop.webp"
          alt="Persona con un ordenador portátil sentada en un sillón"
          width={500}
          height={686}
        />
      </div>
    </section>
  );
}
