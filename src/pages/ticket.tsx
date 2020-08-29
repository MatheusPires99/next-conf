import React from 'react';
import { useRouter } from 'next/router';

// import { Container } from './styles';

const Ticket: React.FC = () => {
  const router = useRouter();

  const { username } = router.query;

  return <h1>{username}</h1>;
};

export default Ticket;
