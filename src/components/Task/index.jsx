import { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { dateFormat } from '../../util/format';
import EditTaskModal from '../EditTaskModal';

import { 
  Table,
  Description,
  Status,
  Edit,
  Delete
} from './styles';

export function Task(prop) {
  const { id, task, status, createAt } = prop.task;
  const destroyTask = prop.destroyTask
  const [isEditTaskModalOpen, setisEditTaskModalOpen] = useState(false);
  const dateFormated = dateFormat(createAt);


  function handleDeleteTask() {
    destroyTask(id)
  }

  function handleOpenEditTaskModalClose() {
    setisEditTaskModalOpen(false);
  }

  return (
    <>
      <Table>
        <Description>{task}</Description>
        <Status status={status}>{status}</Status>
        <div>{dateFormated}</div>
        <Edit>
          <button onClick={() => setisEditTaskModalOpen(true)}>
            <AiOutlineEdit />
          </button>
        </Edit>
        <Delete>
          <button onClick={handleDeleteTask}>
            <AiOutlineDelete />
          </button>
        </Delete>
      </Table>
      <EditTaskModal
        isOpen={isEditTaskModalOpen}
        onRequestClose={handleOpenEditTaskModalClose}           
      />
    </>
  );
};
