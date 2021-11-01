import { useEffect, useState } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5'
import Modal from 'react-modal';
import { Task } from '../Task';
import { api } from '../../services/api';
import { Container, Content, Header } from './styles';
import {NewTaskModal} from '../NewTaskModal';
import { orderedTask } from '../../util/orderedTasks';
import { OrderInput } from './OrderInput';

export function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  
  useEffect(() => {
    const tasksApi = async () => {
      const response = await api.get('tasks')
      const data = await response.data.task;
      const tasksData = data.map(({ _id: id, ...task }) =>  ({ id, ...task }) )
      
      setTasks(tasksData)
    }

    tasksApi()
  }, []);

  async function createNewTask(newTask) {
    const response = await api.post('tasks', newTask)
    const { task } = response.data
    setTasks([...tasks, task])
  }
  console.log(tasks)

  async function destroyTask(id) {
    await api.delete(`tasks/${id}`);
    console.log(tasks)
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
          <OrderInput 
            htmlFor="alphabetic"
            text="Ordem alfabética"
            name="order"
            id="alphabetic"
            orderTasks={orderTasks}
          />
          <OrderInput 
            htmlFor="status"
            text="Status"
            name="order"
            id="status"
            orderTasks={orderTasks}
          />
            <OrderInput 
            htmlFor="date"
            text="Data de criação"
            name="order"
            id="date"
            orderTasks={orderTasks}
          />
        </div>
        <button onClick={() => setIsNewTaskModalOpen(true)}>
          <IoAddCircleOutline />
        </button>
      </Header>

      <Content>
        {tasks.map((task) => (
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
