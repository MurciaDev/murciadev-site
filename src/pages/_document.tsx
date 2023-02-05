import Document, { Html, Head, Main, NextScript } from 'next/document';

const BEAMANALYTICS_TOKEN = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600&display=swap"
            rel="stylesheet"
          />
          {BEAMANALYTICS_TOKEN && (
            <script
              src="https://beamanalytics.b-cdn.net/beam.min.js"
              data-token={BEAMANALYTICS_TOKEN}
              async
            ></script>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
