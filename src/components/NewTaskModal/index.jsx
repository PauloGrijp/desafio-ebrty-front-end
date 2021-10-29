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
        <h3>Adiciona nova tarefa</h3>
        <button onClick={onRequestClose}>
          <AiOutlineClose />
        </button>
      </Header>

      <Container>
        
      </Container>
    </Modal>
  );
};
