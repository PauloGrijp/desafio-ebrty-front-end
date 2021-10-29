import { Container } from './styles';
import { AiOutlineBars, AiOutlineFileAdd } from 'react-icons/ai';
import { Button } from './Button';

export function NavBar() {
  return (
    <Container>
      <h1>Ebytr</h1>
      <nav>
        <ul>
          <Button
            icon={<AiOutlineBars />}
            text="Listar Tarefas"
            isActive
          />
          <Button
            icon={<AiOutlineFileAdd />}
            text="Adicionar Tarefa"
          />             
        </ul>
      </nav>
    </Container>
  );
};
