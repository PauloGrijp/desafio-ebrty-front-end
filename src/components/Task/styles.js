import { darken } from 'polished';
import styled from 'styled-components';

export const Table = styled.div`
  display: grid;
  grid-template-columns: 7fr 2.5fr 2fr 0.25fr 0.25fr;
  
  width: 100%;
  padding: 1rem 2rem;

  vertical-align: middle;
`;

export const Description = styled.div`
  margin-left: 1rem;
  text-align: left;
`;

export const Status = styled.div`
  font-weight: 500;
  
  ${({theme, status}) => {
    if (status === 'Pendente') return `color: ${theme.pending}`;
    if (status === 'Em andamento') return `color: ${theme.inProgress}`;
    if (status === 'Pronto') return `color: ${theme.done}`;
  }}
`;

export const Edit = styled.div`
  button {
    background: none;
    border: none;
    vertical-align: middle;

    transition: all 0.5s;

    &:hover {
      color: ${({ theme }) => darken(0.1, theme.inProgress)};
      transform: scale(1.1);
    }

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

export const Delete = styled.div`
  button {
    background: none;
    border: none;
    vertical-align: middle;

    transition: all 0.5s;

    &:hover {
      color: ${({ theme }) => darken(0.1, theme.error)};
      transform: scale(1.1);
    }

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;