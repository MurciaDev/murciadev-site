import { useMemo } from 'react';
import { Button, List } from '@murciadev/components';

import { links } from './settings';

export default function ContainerHome() {
  const itemsToAnchors = useMemo(() => {
    return links.map(({ title, url }) => (
      <a key={url} href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    ));
  }, []);

  console.log(itemsToAnchors);
  return (
    <div>
      <h1>MurciaDev</h1>
      <p>
        Apasionadas y apasionados del desarrollo y de las tecnologías web
        enMurcia y alrededores.
      </p>
      <List items={itemsToAnchors} />
      <p>
        <a
          href="mailto:hello@murcia.dev"
          rel="noopener noreferrer"
          target="_blank"
        >
          hello@murcia.dev
        </a>
      </p>
      <Button>¡Accede a nuestro Discord!</Button>
    </div>
  );
}
