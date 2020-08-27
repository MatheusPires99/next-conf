import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Next.js Conf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
