import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import { Wrapper } from './styles';

const AppLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default AppLayout;
