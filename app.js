const express = require('express');
const routers = require('./api');
const database = require('./config/db');


const app = express();
app.use(express.json());
app.use('/', routers);

database.sync().then(() => {
  console.log('conectado com o banco de dados.')
});

app.listen(3000, () => {
  console.log('App online!')
});