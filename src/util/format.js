export const dateFormat = (date) => {

  
  const formated = (new Intl.DateTimeFormat('pt-br')).format(new Date(date));
  return formated
}