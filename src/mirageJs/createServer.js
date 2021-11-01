import { createServer, Model } from 'miragejs';
import dataTask from '../schemaDb/data';

export const mirageServer = () => {
  return createServer({
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
        return schema.create('task', { ...data, createAt: new Date() });
      });

      this.delete('tasks/:id', (schema, request) => {
        const id = request.params.id;
        schema.tasks.find(id).destroy();   
      })

      this.put('tasks/:id', (schema, request) => {
        const id = request.params.id;
        const status = JSON.parse(request.requestBody);
        
        schema.tasks.find(id).update(status);
      })
    }
  });
}