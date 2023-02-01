import Image from 'next/image';
import config from '@murciadev/config';
import { Container, Button } from '@murciadev/components';

import fetch from 'node-fetch';

import Newsletter from '../../components/callToAction';
import imageCloudHub from '../../../public/images/cloud-hub.webp';
import styles from './tech-hub.module.css';

import TechHubTable, {
  type Company,
} from '../../components/tech-hub/tech-hub-table';

interface PageTechHubProps {
  companiesList: {
    category: string;
    companies: Company[];
  }[];
}

export default function PageTechHub({ companiesList }: PageTechHubProps) {
  return (
    <>
      <Container design="inner">
        <section className={styles.header}>
          <article>
            <h1>Murcia Tech Hub</h1>
            <p>
              Listado de empresas con trabajos tecnológicos dentro de la Región
              de Murcia.
            </p>
            <p>
              Si conoces alguna empresa más o puedes añadir algún dato más sobre
              las que ya existen en el listado, anímate y actualiza la
              información, puedes hacerlo{' '}
              <a
                href="https://github.com/MurciaDev/murcia-tech-hub/edit/main/companies.json"
                target="_blank"
                rel="noopener nofollow noreferrer"
              >
                desde aquí
              </a>
              .
            </p>
          </article>
          <div className={styles.image}>
            <Image
              alt="Nube con un hub"
              src={imageCloudHub}
              width={520}
              height={592}
            />
          </div>
        </section>
        {companiesList?.map(({ category, companies }) => (
          <TechHubTable
            category={category}
            companies={companies}
            key={category}
          />
        ))}
      </Container>
      <Container design="narrow">
        <div className={styles.contribution}>
          <p>
            Si conoces alguna empresa más o puedes añadir algún dato más sobre
            las que ya existen en el listado, anímate y actualiza la
            información.
          </p>
          <Button
            as="a"
            href="https://github.com/MurciaDev/murcia-tech-hub/edit/main/companies.json"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            ¡Edita esta página!
          </Button>
        </div>
      </Container>
      <Container>
        <Newsletter />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const apiUrl = `${config.GITHUB.REPOSITORY_RAW_URL}/murcia-tech-hub/main/companies.json`;

  const response = await fetch(apiUrl);
  const companiesList = await response.json();

  return {
    props: { companiesList },
  };
}
