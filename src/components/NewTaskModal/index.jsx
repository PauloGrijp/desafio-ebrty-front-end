import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';

import { Container, Header } from './styles';


export function NewTaskModal({ isOpen, onRequestClose }) {
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
        <input type="text" placeholder="Descrição da tarefa"/>
        <div>
          <select name="" id="">
            <option value="pronto">Pronto</option>
            <option value="pendente">Pendente</option>
            <option value="em andamento">Em andamento</option>
          </select>
          <button>Adicionar</button>
        </div>
      </Container>
    </Modal>
  );
};
