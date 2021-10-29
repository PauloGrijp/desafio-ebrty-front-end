import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

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

