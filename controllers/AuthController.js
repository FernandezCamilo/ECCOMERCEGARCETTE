require('dotenv').config()
const filePath = '../database/usuarios.json'
const usuarios = require(filePath)

const fs = require('fs')
const bcrypt = require('bcrypt')
let path = require('path')

function save() {
  fs.writeFileSync(
    path.resolve(__dirname + `/${filePath}`),
    JSON.stringify(usuarios, null, 4)
  )
}

const AuthController = {
  registrar: (req, res) => {
    const { nome, email, senha } = req.body

    // Vereficar se existe um usuario com este email
    let usuarioExiste = fs.existsSync(
      __dirname + `/../database/${email}-tarefas.json`
    )
    if (usuarioExiste) {
      return res.status(409).json({ erro: 'Usuario ya cadastrado' })
    }
  }
}

module.exports = AuthController
