import styled from 'styled-components';

export const Container = styled.input`
  margin-bottom: 16px;
  padding: 0 15px;
  height: 56px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: #252729;
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
