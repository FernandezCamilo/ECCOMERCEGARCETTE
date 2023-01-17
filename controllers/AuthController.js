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
    
    // Importar o array de usuários
    
    // Verificar se o email do usuário existe nesse array
    if (usuarioExiste) {
      return res.status(409).json({ erro: 'Usuario ya cadastrado' })
    }
    
    // Capturar nome email e senha do usuário
    const { nome, email, senha } = req.body

    // Criar um objeto com os dados do usuário

    // Adicionar o objeto criado ao final do array

    // Salvar o array no arquivo.
    save();

    
  }
}

module.exports = AuthController
