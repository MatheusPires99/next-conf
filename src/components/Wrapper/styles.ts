import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 20px 18px 60px;

  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 40px 35px 30px;
  }
`;
