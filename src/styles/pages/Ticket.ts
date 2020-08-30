import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
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

export const UserTicket = styled.div`
  flex: 1;
  width: 330px;
  height: 560px;
  margin-bottom: 60px;

  .ticket-container {
    position: relative;

    display: flex;
    flex-direction: column;
  }
`;

export const GithubUserData = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  top: 46px;
  left: 29px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  div {
    margin-left: 10px;

    display: flex;
    flex-direction: column;

    h3 {
      font-size: 24px;
      line-height: 1.15;
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

  button {
    position: relative;

    & + button {
      margin-top: 16px;
    }

    svg {
      width: 24px;
      height: 24px;
      position: absolute;
      left: 16px;
      top: 18px;
    }
  }
`;
