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
  const { task, status, createAt } = prop.task;
  const dateFormated = dateFormat(createAt);
  return (
    <Table>
      <Description>{task}</Description>
      <Status status={status}>{status}</Status>
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
