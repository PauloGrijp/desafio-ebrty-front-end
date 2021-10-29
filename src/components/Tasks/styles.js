import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 0 15px -4px rgba(0,0,0,0.75);
  border-top: 3px solid ${({ theme }) => theme.primary};;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.backgroundLight};
  margin: 2rem;

  max-width: 1020px;
  width: 100%;

  h1 {
    padding: 1rem 2rem;

    border-bottom: 1px solid ${({ theme }) => theme.border};;
  }
`;
