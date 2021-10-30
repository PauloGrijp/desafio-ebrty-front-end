import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';
import { useState } from 'react/cjs/react.development';

import { Container, Header } from './styles';


export function NewTaskModal({ isOpen, onRequestClose, createNewTask }) {
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('Pendente');

  async function handleCreateNewTask(event) {
    event.preventDefault()

    await createNewTask({ task,  status });

    setTask('')
    setStatus('Pendente')
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Header>
        <h3>Adicionar nova tarefa</h3>
        <button onClick={onRequestClose}>
          <AiOutlineClose />
        </button>
      </Header>

      <Container onSubmit={handleCreateNewTask}>
        <input
          type="text"
          placeholder="Descrição da tarefa"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div>
          <select name="" id="" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Pendente">Pendente</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Pronto">Pronto</option>
          </select>
          <button type="submit">
            Adicionar
          </button>
        </div>
      </Container>
    </Modal>
  );
};
