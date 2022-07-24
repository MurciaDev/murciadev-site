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
    <Container>
      {companiesList.map(({ category, companies }) => (
        <div key={category}>
          <h2>{category}</h2>
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
                            href={`https://www.google.com/maps/search/${address}`}
                            rel="noreferrer nofollow"
                            target="_blank"
                          >
                            Ver dirección
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
