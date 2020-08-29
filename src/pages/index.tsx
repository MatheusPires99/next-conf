import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useTheme } from 'styled-components';

import Input from '../components/Input';
import Button from '../components/Button';
import Separator from '../components/Separator';

import VercelLogo from '../assets/vercel.svg';

import {
  Main,
  TitleSection,
  DateSection,
  FormSection,
  DoubtSection,
  Footer,
  FooterContent,
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
    <>
      <Main>
        <TitleSection>
          <p>
            An interactive online experience by the community, free for
            everyone.
          </p>

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
              placeholder="Enter name to register free"
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
      </Main>

      <Footer
        initial="hidden"
        animate="visible"
        variants={animation.variants}
        transition={{
          duration: animation.duration,
          delay: 2.4,
          ease: animation.ease,
        }}
      >
        <FooterContent>
          <div className="footer-item">
            <p>
              Hosted by <VercelLogo />
            </p>
          </div>

          <div className="footer-item">
            <p>Copyright © 2020 Vercel, Inc. All rights reserved.</p>
          </div>

          <Separator height={24} marginHorizontal={10} />

          <div className="footer-item">
            <a href="https://www.notion.so/vercel/Next-js-Conf-Code-of-Conduct-2dae92927624409db28aaf2a62d99c41">
              Code of Conduct
            </a>
          </div>

          <Separator height={24} marginHorizontal={10} />

          <div className="footer-item">
            <a href="https://vercel.com/legal/privacy-policy?utm_source=next-site&utm_medium=footer&utm_campaign=next-conf">
              Privacy Policy
            </a>
          </div>
        </FooterContent>
      </Footer>
    </>
  );
};

export default Home;
