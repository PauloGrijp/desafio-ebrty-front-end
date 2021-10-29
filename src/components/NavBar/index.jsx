import { Container } from './styles';
import { AiOutlineBars, AiOutlineBarChart } from 'react-icons/ai';
import { Link } from './Link';

export function NavBar() {
  return (
    <Container>
      <h1>tasks</h1>
      <nav>
        <ul>
          <Link
            icon={<AiOutlineBars />}
            route="/"
            text="Listar Tarefas"
          /> 
          <Link
            icon={<AiOutlineBarChart />}
            route="/progress"
            text="Progresso"
          />                  
        </ul>
      </nav>
    </Container>
  );
};
