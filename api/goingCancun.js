const express = require('express');
const router = express.Router();
const Finance  = require('../models/finances');
const bodyParser = require('body-parser');
const {days, getObject, getObject2,getValue,forInt, viability, aplicacao, fees} = require('../services/viability');
const totalValue = require('../services/totalValue');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

let applied = 0; //Valor aplicado
let goCancun = false;

router.get('/', async (req, res) => {
  try{
    const finance = await Finance.findAll({
      attributes: ['person', 'value']
    });  
      /*
        const totalValue = finance.map(getObject).map(getObject2).map(getValue).map(forInt).map(parseFloat).reduce(function(acumulator, atual){
        return acumulator + atual
      }) 
      */
      aplicacao(totalValue(finance), fees, days);
      viability(applied);
      res.status(200).json(goCancun);
  } catch(err){
      res.status(400).json('Não existe lançamento');
    }
})

router.get('/:id', async (req, res) => {
  res.status(404).json('Página não encontrada!')
})

  module.exports = router