import { Container } from './styles';
import Modal from 'react-modal';

export function NewTaskModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <h1>NewTaskModal</h1>     
    </Modal>
  );
};
