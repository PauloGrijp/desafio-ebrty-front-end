import { Item } from './styles';

export function Link({ icon, text, route, isActive }) {
  return (
    <Item isActive={isActive}>
      <a href={route}>        
        <i>{icon}</i>
        {text}
      </a>
    </Item>
  )
};