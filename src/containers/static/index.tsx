import Head from 'next/head';
import { Container } from '@murciadev/components';
import ContainerHomeNewsletter from '../home/components/homeNewsletter';

export interface ContainerStaticProps {
  head?: { [key: string]: string } | null;
  content: string;
}

export default function ContainerHome({ head, content }: ContainerStaticProps) {
  return (
    <>
      <Container design="narrow">
        {head && (
          <Head>
            <title>{head.title}</title>
          </Head>
        )}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
      <Container>
        <ContainerHomeNewsletter />
      </Container>
    </>
  );
}
