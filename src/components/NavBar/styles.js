import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.backgroundLight};
  box-shadow: 0 0 15px -4px rgba(0,0,0,0.75);

  height: 100vh;
  width: fit-content;
  text-align: center;

  h1 {
    padding: 1rem;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 2rem;
    
    i {
      margin-bottom: 1rem;
      width: 2rem;


      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;
