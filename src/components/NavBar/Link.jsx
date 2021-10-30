import { Item } from './styles';

export function Link({ icon, text, isActive }) {
  return (
    <Item isActive={isActive}>
      <button>        
        <i>{icon}</i>
        {text}
      </button>
    </Item>
  )
};