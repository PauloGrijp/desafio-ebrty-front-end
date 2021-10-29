import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { ThemeProvider } from 'styled-components';
import App from './App';
import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/global';

createServer({
  models: {
    task: Model,
  },

  seeds(server) {
    server.db.loadData({
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
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('tasks', () => {
      return this.schema.all('task');
    });

    this.post('tasks', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('task', { ...data, createAt: new Date() })
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
