const express = require('express');
const router = express.Router();
const Finance  = require('../models/finances');
const bodyParser = require('body-parser');
const { viability, aplicacao, fees} = require('../services/viability');
const {days} = require('../services/date')
const {totalValue} = require('../services/totalValue');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

let goCancun = false;
let applied = 0;

router.get('/', async (req, res) => {
  try{
    const finance = await Finance.findAll({
      attributes: ['person', 'value']
    });  
    
      aplicacao(totalValue(finance), fees, days);
      viability(applied);
      res.status(200).json(goCancun);
  } catch(err){
      res.status(400).json('Não existe lançamento');
    }
})

router.get('/:id', async (req, res) => {
  res.status(404).json('Página não encontrada!');
})

  module.exports = router;