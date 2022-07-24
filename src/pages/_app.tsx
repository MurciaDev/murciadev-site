import type { AppProps } from 'next/app';
import Head from 'next/head';
import LayoutMain from '../layouts/main';

import '@murciadev/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutMain>
      <Head>
        <title>MurciaDev</title>
        <meta
          name="description"
          content="Apasionados del desarrollo frontend y de las tecnologías web en Murcia y alrededores."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#cc2727" />
        <meta name="msapplication-TileColor" content="#cc2727" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="author" type="text/plain" href="humans.txt" />
      </Head>
      <Component {...pageProps} />
    </LayoutMain>
  );
}

export default MyApp;
