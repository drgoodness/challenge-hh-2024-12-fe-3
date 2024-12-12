import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../store';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Канбан-доска</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
