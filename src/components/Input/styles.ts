import styled from 'styled-components';

export const Container = styled.input`
  padding: 0 15px;
  height: 56px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-radius: 8px;
  border: 0;
  transition: background 0.2s ease;

  &::placeholder {
    color: #898e97;
  }

  &:focus {
    background-color: #33373c;
  }
`;
