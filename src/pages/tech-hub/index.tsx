import Image from 'next/image';
import config from '@murciadev/config';
import { Container } from '@murciadev/components';

import styles from './tech-hub.module.css';

type company = {
  address: string | null;
  location: string | null;
  name: string;
  remoteWork: 'FULL' | 'FLEX' | 'NONE' | null;
  stack: string | null;
  url: string;
};

interface PageTechHubProps {
  companiesList: { category: string; companies: company[] }[];
}

const remoteDictionary = {
  FLEX: 'Flexible',
  FULL: '100%',
  NONE: 'No',
};

export default function PageTechHub({ companiesList }: PageTechHubProps) {
  return (
    <Container design="inner">
      <section className={styles.header}>
        <article>
          <h1>Murcia Tech Hub</h1>
          <p>
            Listado de empresas con trabajos tecnológicos dentro de la Región de
            Murcia.
          </p>
          <p>
            Si conoces alguna empresa más o puedes poner algún dato más sobre
            las que ya existen en el listado anímate y actualiza los datos,
            puedes hacerlo desde aquí.
          </p>
        </article>
        <Image
          src="/images/cloud-hub.webp"
          alt="Nube con un hub"
          width={520}
          height={592}
        />
      </section>
      {companiesList.map(({ category, companies }) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className={styles.table_wrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Remoto</th>
                  <th>Tecnologías</th>
                  <th>Ubicación</th>
                </tr>
              </thead>
              <tbody>
                {companies.map(
                  ({ address, location, name, remoteWork, stack, url }) => (
                    <tr key={name}>
                      <td width="30%">
                        <a href={url} rel="nofollow">
                          {name}
                        </a>
                      </td>
                      <td>{remoteWork ? remoteDictionary[remoteWork] : '?'}</td>
                      <td>{stack || '?'}</td>
                      <td>
                        {address && location ? (
                          <>
                            {location}.{' '}
                            <a
                              className={styles.table_link}
                              href={`https://www.google.com/maps/search/${address}`}
                              rel="noreferrer nofollow"
                              target="_blank"
                            >
                              Ver dirección →
                            </a>
                          </>
                        ) : (
                          '?'
                        )}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </Container>
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
