import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { dateFormat } from '../../util/format';
import { 
  Table,
  Checked,
  Description,
  Status,
  Priority,
  Edit,
  Delete
} from './styles';

export function Task(prop) {
  const { task, status, priority, createAt } = prop.task;
  const dateFormated = dateFormat(createAt);
  return (
    <Table>
      <div><input type="checkbox" name="" id="" /></div>
      <Description>{task}</Description>
      <Status status={status}>{status}</Status>
      <Priority priority={priority}>{priority}</Priority>
      <div>{dateFormated}</div>
      <Edit>
        <button>
          <AiOutlineEdit />
        </button>
      </Edit>
      <Delete>
        <button>
          <AiOutlineDelete />
        </button>
      </Delete>
    </Table>
  );
};
