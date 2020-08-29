import React from 'react';
import { useTheme } from 'styled-components';

import VercelLogo from '../../assets/vercel.svg';

import Separator from '../Separator';

import { Container, FooterContent } from './styles';

const Footer: React.FC = () => {
  const { animation } = useTheme();

  return (
    <Container
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
    </Container>
  );
};

export default Footer;
