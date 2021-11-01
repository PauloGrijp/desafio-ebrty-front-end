export function OrderInput({name, htmlFor, text, id, orderTasks}) {
  return (
    <label htmlFor={htmlFor}>
       <input
        type="radio"
        name={name}
        id={id}
        onClick={(e) => orderTasks(e.target.id)}
      />
      {text}
    </label>
  );
};
