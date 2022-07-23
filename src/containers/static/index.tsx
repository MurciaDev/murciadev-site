import Head from 'next/head';
import { Container } from '@murciadev/components';

export interface ContainerStaticProps {
  head?: { [key: string]: string } | null;
  content: string;
}

export default function ContainerHome({ head, content }: ContainerStaticProps) {
  return (
    <Container design="narrow">
      {head && (
        <Head>
          <title>{head.title}</title>
        </Head>
      )}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
}
