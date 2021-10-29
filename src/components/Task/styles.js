import { darken } from 'polished';
import styled from 'styled-components';

export const Table = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 5fr 2fr 1fr 1.5fr 0.25fr 0.25fr;
  
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
    if (status === 'pendente') return `color: ${theme.pending}`;
    if (status === 'em andamento') return `color: ${theme.inProgress}`;
    if (status === 'pronto') return `color: ${theme.done}`;
  }}
`;
export const Priority = styled.div`
  font-weight: 500;

 ${({theme, priority}) => {
    if (priority === 'alta') return `color: ${theme.highPrt}`;
    if (priority === 'media') return `color: ${theme.mediumPrt}`;
    if (priority === 'baixa') return `color: ${theme.lowPrt}`;
  }}
`;

export const Edit = styled.div`
  button {
    background: none;
    border: none;
    vertical-align: middle;

    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => darken(0.1, theme.inProgress)}
    }
  }
`;

export const Delete = styled.div`
  button {
    background: none;
    border: none;
    vertical-align: middle;

    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => darken(0.1, theme.error)}
    }
  }
`;