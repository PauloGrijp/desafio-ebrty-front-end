import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.form`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  
  select {
    border: 1px solid ${({ theme }) => theme.border};
    padding: 1rem 3rem 1rem 1rem;
    color: ${({ theme }) => theme.text};
    outline: none;
  }

  button {
    border: none;
    border-radius: 0.25rem;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.backgroundLight};;
    padding: 0.75rem 2rem;

    transition: all 0.3s;

    &:hover {
      background: ${({ theme }) => lighten(0.05, theme.primary)};
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.border};

  padding: 1rem 2rem;

  button {
    border: none;
    background: none;   

    transition: all 0.5s;

    &:hover {
      color: ${({ theme }) => theme.error};
      transform: scale(1.2);
    }

    svg {
      height: 1.2rem;
      width: 1.2rem;
    }
  }
`;