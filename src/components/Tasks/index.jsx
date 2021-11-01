import { useEffect, useState } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5'
import Modal from 'react-modal';
import { Task } from '../Task';
import { api } from '../../services/api';
import { Container, Content, Header } from './styles';
import {NewTaskModal} from '../NewTaskModal';
import { orderedTask } from '../../util/orderedTasks';

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
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.status = status;
        return task
      }
      return task
    })
    setTasks(newTasks)
  }

  function handleOpenNewTaskModalClose() {
    setIsNewTaskModalOpen(false);
  } 

  //source: https://github.com/facebook/react/issues/15595
  function orderTasks(value) {
    const ordered = orderedTask(tasks, value);
    setTasks([...ordered])
    
  }
  
  Modal.setAppElement('#root');

  return (
    <Container>
      <Header>
        <h2>Todas as tarefas</h2>
        <div>
          <label htmlFor="alphabetic">
            <input
              type="radio"
              name="order"
              id="alphabetic"
              onClick={(e) => orderTasks(e.target.id)}
            />
            Ordem alfabética
          </label> 
          <label htmlFor="status">
            <input
              type="radio"
              name="order"
              id="status"
              onClick={(e) => orderTasks(e.target.id)}
            />
            status
          </label> 
          <label htmlFor="date">
            <input
              type="radio"
              name="order"
              id="date"
              onClick={(e) => orderTasks(e.target.id)}
            />
            Data de criação
          </label>
        </div>
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
