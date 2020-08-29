import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
`;

export const Content = styled.div`
  width: 300px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 100%;
    padding: 0 40px;
  }

  @media (min-width: 1280px) {
    width: 1230px;
    padding: 0px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 24px;
    height: 112px;
    width: 187px;
  }

  p {
    display: none;
    color: ${({ theme }) => theme.colors.secundary};
    line-height: 1.4;

    @media (min-width: 1200px) {
      display: flex;
      align-items: center;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 24px;
    margin-bottom: 8px;
  }

  > div {
    display: flex;

    div {
      width: 24px;
      height: 24px;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      &.globe-icon {
        background: linear-gradient(90deg, #ec6193, #ec4b31);
      }

      &.picture-icon {
        background: linear-gradient(90deg, #ffbc29, #eadf58);
      }

      &.graph-icon {
        background: linear-gradient(90deg, #57c84f, #53a0ec);
      }

      svg {
        width: 14px;
        height: 14px;
      }
    }
  }
`;

export const RightContent = styled.aside`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  span {
    color: ${({ theme }) => theme.colors.secundary};

    display: flex;
    align-items: center;

    svg {
      width: 71px;
      height: 16px;
      margin-left: 4px;
    }
  }
`;
