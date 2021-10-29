import { Task } from '../Task';
import { Container, Content, Table } from './styles';

export function Tasks() {
  return (
    <Container>
      <h2>Todas as tarefas</h2>
      <Content>     
        <Task />
        <Task />
      </Content>
    </Container>
  );
};
