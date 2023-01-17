//Servidor(Projecto Node)
const ClienteController = require('./controllers/ClienteController')

const express = require('express');
const AuthRouter = require('./routes/AuthRouter');
const app = express()

app.use(express.static('public'));

app.use('/', AuthRouter);

app.listen({ port: 3000, host: '0.0.0.0' }, function () {
  console.log('Servidor Rodando na porta 3000')
})
