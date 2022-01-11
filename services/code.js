const express = require('express')
const app = express()
const Finance  = require('../models/finances')

let code = ''
app.get('/', async (req, res) => {
    const finance = await Finance.findAll({
      attributes: ['id']
    })
    const getArray = obj => obj.split("-")
    const getIndice = obj => obj[0] // Pegando o valor do Objeto
    const uppercase = obj => obj.toUpperCase()
  
  
    const response = finance.map(getArray).map(getIndice).map(uppercase)
    let code = response;
    await Finance.save({
        code
      })
    res.status(200).json(response)
})

module.exports = code;