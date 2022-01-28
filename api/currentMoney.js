const express = require('express');
const router = express.Router();
const Finance = require('../models/finances');
const bodyParser = require('body-parser');
const { totalValue } = require('../services/totalValue');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/', async (req, res) => {
  const finance = await Finance.findAll({
    attributes: ['value']
  });

  //Retorna o valor total depositado no formato BRL ( R$ )
  const value = totalValue(finance).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  res.status(200).json(value);
})

module.exports = router;