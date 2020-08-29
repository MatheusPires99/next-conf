import styled from 'styled-components';

interface SeparatorProps {
  height: number;
  marginHorizontal?: number;
}

export const Container = styled.div<SeparatorProps>`
  width: 1px;
  height: ${props => props.height}px;
  margin: 0 ${props => props.marginHorizontal}px;
  background: ${props => props.theme.colors.secundary};
`;
