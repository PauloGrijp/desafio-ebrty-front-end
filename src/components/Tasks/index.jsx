import { useEffect, useState } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5'
import { Task } from '../Task';
import { api } from '../../services/api';
import { Container, Content, Header } from './styles';

export function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('tasks')
      .then((response) => setTasks(response.data.tasks))
  }, [])

  return (
    <Container>
      <Header>
        <h2>Todas as tarefas</h2>
        <button>
          <IoAddCircleOutline />
        </button>
      </Header>

      <Content>
        {tasks.map((task) => <Task key={task._id} task={task}/>)}
      </Content>
    </Container>
  );
};
