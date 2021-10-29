import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { Table } from './styles';

export function Task() {
  return (
    <Table>
      <div><input type="checkbox" name="" id="" /></div>
      <div>Tarefafghjfjfgjfjfjfgjgfhj</div>
      <div>Status</div>
      <div>Prioridade</div>
      <div>Data</div>
      <div><AiOutlineDelete /></div>
      <div><AiOutlineEdit /></div>
    </Table>
  );
};
