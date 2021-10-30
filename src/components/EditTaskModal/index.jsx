import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

import { Container, Header } from './styles';
import { useState } from 'react';

function EditTaskModal({isOpen, onRequestClose}) {
  const [status, setStatus] = useState('Pendente');
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
      
      <Container>
        <select name="" id="" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pendente">Pendente</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Pronto">Pronto</option>
        </select>
        <button type="submit">
          Editar
        </button>
      </Container>
    </Modal>
  );
};

export default EditTaskModal;
