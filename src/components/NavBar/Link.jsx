export function Link({ icon, text, route }) {
  return (
    <li>
      <a href={route}>        
        <i>{icon}</i>
        {text}
      </a>
    </li>
  )
};