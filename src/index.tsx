import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'App Alluagro',
          type: 'deposit',
          category: 'App',
          amount: 30000,
          createdAt: new Date('2021-07-14 19:00:00'),
        },
        {
          id: 2,
          title: 'Hamburguer',
          type: 'withdraw',
          category: 'Comida',
          amount: 64,
          createdAt: new Date('2021-07-14 20:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
