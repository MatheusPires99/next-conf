import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.footer)`
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

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .footer-item {
    margin-top: 16px;

    @media (min-width: 768px) {
      margin-top: 0px;

      &:nth-child(1) {
        display: none;
      }
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

  .separator {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;
