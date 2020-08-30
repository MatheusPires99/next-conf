import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 80px;

  @media (min-width: 1200px) {
    flex-direction: row;
    width: 1130px;
    margin-top: 0px;
    margin: 0 auto;
  }

  .ticket-support {
    display: none;

    @media (min-width: 768px) {
      display: block;
      position: absolute;
      opacity: 0;
    }
  }
`;

export const TicketData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-bottom: 45px;

  @media (min-width: 1200px) {
    width: inherit;
    margin-bottom: 0px;
    margin-right: 45px;
    align-items: flex-start;
  }

  h1 {
    font-size: 52px;
    line-height: 1.15;
    letter-spacing: -0.05em;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 100px;
    }

    @media (min-width: 1200px) {
      font-size: 64px;
      text-align: left;
    }
  }

  p {
    margin: 30px 0;
    font-size: 20px;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.secundary};
    max-width: 350px;
    text-align: center;

    @media (min-width: 768px) {
      max-width: 415px;
      font-size: 24px;
    }

    @media (min-width: 1200px) {
      text-align: left;
    }
  }

  .github-user-data {
    width: 100%;
    max-width: 400px;
    background: ${({ theme }) => theme.colors.inputBackground};
    height: 56px;
    border-radius: 8px;
    padding: 0 16px;

    display: flex;
    align-items: center;

    @media (min-width: 1200px) {
      max-width: 240px;
    }

    span {
      margin-left: 16px;
    }

    svg {
      width: 24px;
      height: 24px;
      color: #fff;
    }

    svg.check-icon {
      margin-left: auto;
    }
  }

  > span {
    color: ${({ theme }) => theme.colors.secundary};
    margin-top: 12px;
  }
`;

export const UserTicket = styled(motion.div)`
  flex: 1;

  margin-bottom: 60px;

  @media (min-width: 1200px) {
    margin-bottom: 0px;
  }

  .ticket-container {
    position: relative;

    display: flex;
    flex-direction: column;
    align-self: center;

    > svg:nth-child(1) {
      display: block;
      align-self: center;
      width: 330px;
      height: 560px;
    }

    > svg:nth-child(2) {
      display: none;
      width: 650px;
      height: 330px;
    }

    @media (min-width: 768px) {
      > svg:nth-child(1) {
        display: none;
      }

      > svg:nth-child(2) {
        display: block;
      }
    }
  }
`;

export const GithubUserData = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  top: 46px;
  left: 65px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;

    @media (min-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }

  div {
    margin-left: 10px;

    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      margin-left: 16px;
    }

    h3 {
      font-size: 24px;
      line-height: 1.15;

      @media (min-width: 768px) {
        font-size: 32px;
      }
    }

    p {
      display: flex;
      align-items: center;

      margin-top: 4px;
      color: ${({ theme }) => theme.colors.secundary};

      svg {
        width: 20px;
        height: 20px;
        margin-right: 4px;
      }
    }
  }
`;

export const SocialMedia = styled.div`
  width: 400px;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-self: center;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }

  button {
    position: relative;

    &:nth-child(2) {
      display: none;
    }

    & + button {
      margin-top: 16px;
    }

    @media (min-width: 768px) {
      width: 100%;

      &:nth-child(2) {
        display: block;
      }

      & + button {
        margin-top: 0px;
        margin-left: 16px;
      }
    }

    svg {
      width: 24px;
      height: 24px;
      position: absolute;
      left: 16px;
      top: 16px;
    }
  }
`;
