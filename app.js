//Servidor(Projecto Node)
const ClienteController = require('./controllers/ClienteController')

const express = require('express')
const app = express()

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post('/salvarcliente', function (req, res) {
  ClienteController.registrar(req, res)
})

app.listen({ port: 3000, host: '0.0.0.0' }, function () {
  console.log('Servidor Rodando na porta 3000')
})
