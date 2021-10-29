import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { ThemeProvider } from 'styled-components';
import App from './App';
import dataTask from './schemaDb/data';
import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/global';

createServer({
  models: {
    task: Model,
  },

  seeds(server) {
    server.db.loadData(dataTask);
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
