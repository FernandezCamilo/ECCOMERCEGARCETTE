require('dotenv').config()
const fs = require('fs')
let path = require('path')

function save(cliente) {
  fs.writeFileSync(
    path.resolve(__dirname + `/../database/${cliente.nome}-cliente.json`),
    JSON.stringify(cliente, null, 4)
  )
}

const ClienteController = {
  registrar: (req, res) => {
    const { nome, idade } = req.body

    // Vereficar se existe um usuario com este email
    let usuarioExiste = fs.existsSync(
      __dirname + `/../database/${nome}-cliente.json`
    )
    if (usuarioExiste) {
      return res.status(409).json({ erro: 'Cliente ya cadastrado' })
    } else {
      save({ nome, idade })
      return res
        .status(201)
        .json({ sucesso: 'Cliente cadastrado com sucesso!' })
    }
  }
}

module.exports = ClienteController
