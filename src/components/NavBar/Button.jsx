import { Item } from './styles';

export function Button({ icon, text, route, isActive }) {
  return (
    <Item isActive={isActive}>
      <button>        
        <i>{icon}</i>
        {text}
      </button>
    </Item>
  )
};