const express = require('express')
const router = express.Router()
const Finance  = require('../models/finances')
const bodyParser = require('body-parser')
const { json } = require('body-parser')
const { get } = require('express/lib/response')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

router.get('/', async (req, res) => {
  const finance = await Finance.findAll({
    attributes: ['person', 'value']
  });
    const getObject = json => JSON.stringify(json)
    const getObject2 = json => JSON.parse(json) 
    const getValue = value => value.value // Pegando o valor do Objeto
    const forInt = i => i.split(',')

    const response = finance.map(getObject).map(getObject2).map(getValue).map(forInt).map(parseFloat).reduce(function(acumulador, atual){
      console.log(acumulador, atual);
      return acumulador + atual
    }).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    res.status(200).json(response)
  })

  router.get('/valortotal', async (req, res) => {
    const finances = await Finance.findAll({
      attributes: ['value']
    });
      const getObject = json => JSON.stringify(json)
      const getObject2 = json => JSON.parse(json) 
      const getValue = value => value.value // Pegando o valor do Objeto
      const forInt = i => i.split(',')
  
      const response = finance.map(getObject).map(getObject2).map(getValue).map(forInt).map(parseFloat)
      res.status(200).json(response)
    })



  module.exports = router