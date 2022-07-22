import Head from 'next/head';
import ContainerHome from '../containers/home';

export default function PageHome() {
  return (
    <>
      <Head>
        <title>MurciaDev</title>
        <meta
          name="description"
          content="Apasionados del desarrollo frontend y de las tecnologías web en Murcia y alrededores."
        />
      </Head>
      <ContainerHome />
    </>
  );
}
