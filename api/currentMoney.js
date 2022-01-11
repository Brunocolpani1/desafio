const express = require('express')
const router = express.Router()
const Finance  = require('../models/finances')
const bodyParser = require('body-parser')
const { getObject, getObject2,getValue,forInt} = require('../services/viability')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))


router.get('/', async (req, res) => {
  const finance = await Finance.findAll({
    attributes: ['value']
  });

    const response = finance.map(getObject).map(getObject2).map(getValue).map(forInt).map(parseFloat).reduce(function(acumulador, atual){
      return acumulador + atual
    }).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    res.status(200).json(response)
  })

  module.exports = router