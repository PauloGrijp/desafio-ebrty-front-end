import { Container } from './styles';
import { AiOutlineBars, AiOutlineBarChart } from 'react-icons/ai';

export function NavBar() {
  return (
    <Container>
      <h1>tasks</h1>
      <nav>
        <ul>
          <li>
            <i><AiOutlineBars /></i>
            <a href="/">Listar Tarefas</a>
          </li>

          <li>
            <i><AiOutlineBarChart /></i>
            <a href="/progress">Progresso </a>
          </li>                    
        </ul>
      </nav>
    </Container>
  );
};
