import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.button)`
  height: 56px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.background};
  }
`;
