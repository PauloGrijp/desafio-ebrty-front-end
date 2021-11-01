export const orderedTask = (tasks, value) => {
  if(value === 'alphabetic') {
    const ordered = tasks;
    ordered.sort((x, y) => {
      const a = x.task.toUpperCase();
      const b = y.task.toUpperCase();      
      
      return a === b
        ? 0
        : a > b
          ? 1 : -1  
    });
    return ordered;
  }
  if(value === 'status') {
    const ordered = tasks;
    ordered.sort((a, b) => {
      return a.status === b.status
        ? 0
        : a.status > b.status
          ? 1 : -1  
    });
    return ordered;
  }

  if(value === 'date') {
    const ordered = tasks;
    ordered.sort((a, b) => {
      return new Date(a.createAt) - new Date(b.createAt)
    });
   return ordered;
  } 
}