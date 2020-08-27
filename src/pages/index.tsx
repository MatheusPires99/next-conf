import React from 'react';

import Header from '../components/Header';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <h1>Hello World</h1>
    </Container>
  );
};

export default Home;
