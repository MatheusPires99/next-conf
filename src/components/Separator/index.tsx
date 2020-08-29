import React from 'react';

import { Container } from './styles';

interface SeparatorProps {
  height: number;
  marginHorizontal?: number;
}

const Separator: React.FC<SeparatorProps> = ({
  height,
  marginHorizontal = 16,
}) => {
  return (
    <Container
      className="separator"
      height={height}
      marginHorizontal={marginHorizontal}
    />
  );
};

export default Separator;
