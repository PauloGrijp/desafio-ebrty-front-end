import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  box-shadow: 0 0 15px -4px rgba(0,0,0,0.75);
  border-top: 3px solid ${({ theme }) => theme.primary};;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.backgroundLight};
  
  max-width: 1020px;
  width: 100%;
  margin: 2rem;
`;

export const Content = styled.section`
text-align: center;
   & > div {
    border-bottom: 1px solid ${({ theme }) => theme.border};

    &:hover {
      background: ${({ theme }) => darken(0.05, theme.backgroundLight)};
    }
   }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 1.2rem 2rem;

  button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.primary};

    transition: all 0.5s;

    &:hover {
      color: ${({ theme }) => lighten(0.2, theme.primary)};
      transform: scale(1.06); 
    }   

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;
