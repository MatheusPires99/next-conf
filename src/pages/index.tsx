import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useTheme } from 'styled-components';

import Input from '../components/Input';
import Button from '../components/Button';
import Separator from '../components/Separator';

import {
  Container,
  TitleSection,
  DateSection,
  FormSection,
  DoubtSection,
} from '../styles/pages/Home';

const Home: React.FC = () => {
  const { animation } = useTheme();
  const router = useRouter();

  const [username, setUsername] = useState('');

  const handleGoToTicket = useCallback(
    e => {
      e.preventDefault();

      router.push({
        pathname: '/ticket',
        query: { username },
      });
    },
    [router, username],
  );

  return (
    <Container>
      <TitleSection>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={animation.variants}
          transition={{
            duration: animation.duration,
            delay: 1.2,
            ease: animation.ease,
          }}
        >
          An interactive online experience by the community, free for everyone.
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={animation.variants}
          transition={{
            duration: animation.duration,
            delay: 1.2,
            ease: animation.ease,
          }}
        >
          The first
          <br className="line-break" /> Next.js <br className="line-break" />{' '}
          global user conference
        </motion.h1>
      </TitleSection>

      <DateSection
        initial="hidden"
        animate="visible"
        variants={animation.variants}
        transition={{
          duration: animation.duration,
          delay: 1.6,
          ease: animation.ease,
        }}
      >
        <p>OCTOBER 27, 2020</p>

        <Separator height={24} />

        <strong>ONLINE</strong>
      </DateSection>

      <FormSection
        initial="hidden"
        animate="visible"
        variants={animation.variants}
        transition={{
          duration: animation.duration,
          delay: 2,
          ease: animation.ease,
        }}
      >
        <form onSubmit={handleGoToTicket}>
          <Input
            placeholder="Enter your Github user name"
            required
            onChange={e => setUsername(e.target.value)}
          />

          <Button type="submit">Register</Button>
        </form>
      </FormSection>

      <DoubtSection
        initial="hidden"
        animate="visible"
        variants={animation.variants}
        transition={{
          duration: animation.duration,
          delay: 2,
          ease: animation.ease,
        }}
      >
        Want to speak or sponsor?
        <a href="mailto:conf@nextjs.org">conf@nextjs.org</a>
      </DoubtSection>
    </Container>
  );
};

export default Home;
