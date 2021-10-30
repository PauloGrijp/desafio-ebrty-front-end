import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { dateFormat } from '../../util/format';

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
  const modalOpen = prop.EditTaskModalOpen
  const dateFormated = dateFormat(createAt);

  function handleDeleteTask() {
    destroyTask(id)
  }

  return (
    <Table>
      <Description>{task}</Description>
      <Status status={status}>{status}</Status>
      <div>{dateFormated}</div>
      <Edit>
        <button onClick={modalOpen}>
          <AiOutlineEdit />
        </button>
      </Edit>
      <Delete>
        <button onClick={handleDeleteTask}>
          <AiOutlineDelete />
        </button>
      </Delete>
    </Table>
  );
};
