import React from 'react';

import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';

import VercelLogo from '../assets/vercel.svg';

import {
  Container,
  Main,
  TitleSection,
  DateSection,
  FormSection,
  DoubtSection,
  Footer,
  FooterContent,
} from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header />

      <Container>
        <Main>
          <TitleSection>
            <p>
              An interactive online experience by the community, free for
              everyone.
            </p>

            <h1>The first Next.js global user conference</h1>
          </TitleSection>

          <DateSection>
            <p>OCTOBER 27, 2020</p>

            <div className="separator" />

            <strong>ONLINE</strong>
          </DateSection>

          <FormSection>
            <form>
              <Input type="email" placeholder="Enter email to register free" />

              <Button type="email">Register</Button>
            </form>
          </FormSection>

          <DoubtSection>
            Want to speak or sponsor?
            <a href="mailto:conf@nextjs.org">conf@nextjs.org</a>
          </DoubtSection>
        </Main>

        <Footer>
          <FooterContent>
            <div className="footer-item">
              <p>
                Hosted by <VercelLogo />
              </p>
            </div>

            <div className="footer-item">
              <p>Copyright © 2020 Vercel, Inc. All rights reserved.</p>
            </div>

            <div className="footer-item">
              <a href="https://www.notion.so/vercel/Next-js-Conf-Code-of-Conduct-2dae92927656409db28aaf2a62d99c41">
                Code of Conduct
              </a>
            </div>

            <div className="footer-item">
              <a href="https://vercel.com/legal/privacy-policy?utm_source=next-site&utm_medium=footer&utm_campaign=next-conf">
                Privacy Policy
              </a>
            </div>
          </FooterContent>
        </Footer>
      </Container>
    </Wrapper>
  );
};

export default Home;
