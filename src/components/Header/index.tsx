import React from 'react';
import { useTheme } from 'styled-components';

import Separator from '../Separator';

import NextLogo from '../../assets/next.svg';
import VercelLogo from '../../assets/vercel.svg';
import Globe from '../../assets/globe.svg';
import Picture from '../../assets/picture.svg';
import Graph from '../../assets/graph.svg';

import { Container, Content, MainContent, Icons, RightContent } from './styles';

const Header: React.FC = () => {
  const { animation } = useTheme();

  return (
    <Container>
      <Content>
        <MainContent
          initial="hidden"
          animate="visible"
          variants={animation.variants}
          transition={{
            duration: animation.duration,
            delay: 0.4,
            ease: animation.ease,
          }}
        >
          <NextLogo />

          <Icons>
            <h1>CONF</h1>

            <div>
              <div className="globe-icon">
                <Globe />
              </div>
              <div className="picture-icon">
                <Picture />
              </div>
              <div className="graph-icon">
                <Graph />
              </div>
            </div>
          </Icons>

          <p>
            <Separator height={56} />
            An interactive online experience by the community, <br /> free for
            everyone.
          </p>
        </MainContent>

        <RightContent
          initial="hidden"
          animate="visible"
          variants={animation.variants}
          transition={{
            duration: animation.duration,
            delay: 0.8,
            ease: animation.ease,
          }}
        >
          <span>
            Hosted by <VercelLogo />
          </span>
        </RightContent>
      </Content>
    </Container>
  );
};

export default Header;
