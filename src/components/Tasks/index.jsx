import { useEffect, useState } from 'react';
import { Task } from '../Task';
import { api } from '../../services/api';
import { Container, Content } from './styles';

export function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('tasks')
      .then((response) => setTasks(response.data.tasks))
  }, [])

  return (
    <Container>
      <h2>Todas as tarefas</h2>
      <Content>
        {tasks.map((task) => <Task key={task._id} task={task}/>)}
      </Content>
    </Container>
  );
};
