import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { dateFormat } from '../../util/format';
import { Table } from './styles';

export function Task(prop) {
  const { task, status, priority, createAt } = prop.task;
  const dateFormated = dateFormat(createAt);
  return (
    <Table>
      <div><input type="checkbox" name="" id="" /></div>
      <div>{task}</div>
      <div>{status}</div>
      <div>{priority}</div>
      <div>{dateFormated}</div>
      <div><AiOutlineDelete /></div>
      <div><AiOutlineEdit /></div>
    </Table>
  );
};
