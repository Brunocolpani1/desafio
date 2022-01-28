const express = require('express');
const router = express.Router();
const Finance = require('../models/finances');
const bodyParser = require('body-parser');
const { viability, aplicacao, getPeople, fees } = require('../services/viability');
const days = require('../services/date');
const { totalValue } = require('../services/totalValue');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', async (req, res) => {
  try {
    const finance = await Finance.findAll({
      attributes: ['person', 'value']
    });

    //Pega a quantidade de pessoas que fizeram os depósitos
    let pessoas = getPeople(finance)

    /*Pega o valor total dos depositos e faz a soma de juros composto até a data do dia 01/03/2023
     e pega a quantidade de pessoas que fizeram depositos e divide o valor total por pessoas,
      se maior que 30000 retorna true, senão o retorno será FALSE */
    let goCancun = viability(aplicacao(totalValue(finance), fees, days), pessoas.length);
    res.status(200).json(goCancun);
  } catch (err) {
    res.status(400).json('Não existe lançamento');
  }
})

router.get('/:id', async (req, res) => {
  res.status(404).json('Página não encontrada!');
})

module.exports = router;