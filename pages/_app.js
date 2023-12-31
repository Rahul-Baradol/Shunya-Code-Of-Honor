import Head from 'next/head';
import { CookiesProvider } from 'react-cookie';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Code Of Honour | Shunya</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      {/* <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      /> */}
    </Head>
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  </>
);

export default MyApp;
