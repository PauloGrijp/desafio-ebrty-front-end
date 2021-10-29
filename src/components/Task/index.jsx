import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { Table } from './styles';

export function Task(prop) {
  const { task, status, priority, createAt } = prop.task;
  return (
    <Table>
      <div><input type="checkbox" name="" id="" /></div>
      <div>{task}</div>
      <div>{status}</div>
      <div>{priority}</div>
      <div>{createAt}</div>
      <div><AiOutlineDelete /></div>
      <div><AiOutlineEdit /></div>
    </Table>
  );
};
