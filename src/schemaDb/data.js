const dataTask = {
  tasks: [
    {
      _id: 1,
      task: 'Primeira tarefa cadastrada',
      status: 'pendente',
      priority: 'baixa',
      createAt: new Date(),
    },
    {
      _id: 2,
      task: 'Segunda tarefa cadastrada',
      status: 'pronto',
      priority: 'media',
      createAt: new Date(),
    },
    {
      _id: 3,
      task: 'Terceira tarefa cadastrada',
      status: 'em andamento',
      priority: 'alta',
      createAt: new Date(),
    }
  ]
}

export default dataTask;