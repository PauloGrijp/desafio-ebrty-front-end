import { useEffect, useState } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5'
import Modal from 'react-modal';
import { Task } from '../Task';
import { api } from '../../services/api';
import { Container, Content, Header } from './styles';
import {NewTaskModal} from '../NewTaskModal';

export function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  useEffect(() => {
    api.get('tasks')
      .then((response) => setTasks(response.data.tasks))
  }, []);

  async function createNewTask(newTask) {
    const response = await api.post('tasks', newTask)
    const { task } = response.data
    
    setTasks([...tasks, task])
  }

  async function destroyTask(id) {
    await api.delete(`tasks/${id}`);
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  async function editTask(id, status) {
    await api.put(`tasks/${id}`, {status});
    // const newTasks = tasks.filter((task) => task.id !== id)
    // setTasks(newTasks)
  }

  function handleOpenNewTaskModalClose() {
    setIsNewTaskModalOpen(false);
  } 

  Modal.setAppElement('#root');

  return (
    <Container>
      <Header>
        <h2>Todas as tarefas</h2>
        <button onClick={() => setIsNewTaskModalOpen(true)}>
          <IoAddCircleOutline />
        </button>
      </Header>

      <Content>
        {tasks.map(({ _id: id, ...task }) => (
          <Task
            key={task.id}
            task={task}
            destroyTask={destroyTask}
            editTask={editTask}
          />
        ))}
      </Content>

      <NewTaskModal 
        isOpen={isNewTaskModalOpen}
        onRequestClose={handleOpenNewTaskModalClose}
        createNewTask={createNewTask}
      />  
    </Container>
  );
};
