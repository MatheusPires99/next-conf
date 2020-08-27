import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;

  p {
    max-width: 355px;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.secundary};
    margin-bottom: 30px;
  }

  h1 {
    font-size: 52px;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    line-height: 1.15;
    letter-spacing: -0.05em;
    margin-bottom: 25px;
  }
`;

export const DateSection = styled.section`
  display: flex;
  align-items: center;

  font-size: 20px;
  margin-bottom: 32px;
  line-height: 1.4;

  .separator {
    width: 1px;
    height: 24px;
    margin: 0 16px;
    background: ${({ theme }) => theme.colors.secundary};
  }
`;

export const FormSection = styled.section`
  width: 100%;
  margin-bottom: 24px;

  form {
    max-width: 400px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
  }
`;

export const DoubtSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.colors.secundary};

  a {
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  width: 100%;
  font-size: 14px;
  line-height: 1.5;
  margin: 0 auto;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .footer-item {
    & + div {
      margin-top: 16px;
    }

    a,
    p {
      color: ${({ theme }) => theme.colors.secundary};
      transition: color 0.2s ease;
    }

    a:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    svg {
      height: 16px;
      width: 71px;
    }
  }
`;
