import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: column-reverse;
  }

  p {
    max-width: 355px;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.secundary};
    margin-bottom: 30px;

    @media (min-width: 768px) {
      max-width: 531px;
      font-size: 32px;
      margin-bottom: 40px;
    }

    @media (min-width: 1200px) {
      display: none;
    }
  }

  h1 {
    font-size: 52px;
    text-align: center;
    line-height: 1.15;
    letter-spacing: -0.05em;
    margin-bottom: 25px;

    @media (min-width: 768px) {
      font-size: 100px;
      line-height: 1;
      font-weight: 800;
      margin: 0 -20px 40px;
    }

    .line-break:nth-child(1) {
      display: none;

      @media (min-width: 768px) {
        display: block;
      }

      @media (min-width: 1200px) {
        display: none;
      }
    }

    .line-break:nth-child(2) {
      display: block;

      @media (min-width: 768px) {
        display: none;
      }

      @media (min-width: 1200px) {
        display: block;
      }
    }
  }
`;

export const DateSection = styled(motion.section)`
  display: flex;
  align-items: center;

  font-size: 20px;
  margin-bottom: 32px;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 80px;
  }
`;

export const FormSection = styled(motion.section)`
  width: 100%;
  margin-bottom: 24px;

  form {
    max-width: 400px;
    margin: 0 auto;
    position: relative;

    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 16px;
    }

    @media (min-width: 768px) {
      max-width: 480px;

      button {
        position: absolute;
        right: 8px;
        top: 8px;
        height: 40px;
        width: 120px;
      }

      input {
        margin-bottom: 0px;
      }
    }
  }
`;

export const DoubtSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.colors.secundary};

  @media (min-width: 768px) {
    flex-direction: row;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 8px;

    &:hover {
      text-decoration: underline;
    }

    @media (min-width: 768px) {
      margin-top: 0px;
      margin-left: 4px;
    }
  }
`;
