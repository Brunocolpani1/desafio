const express = require('express');
const router = express.Router();
const Finance = require('../models/finances');
const bodyParser = require('body-parser');
const { getObject, getObject2, getValue, forInt, juros } = require('../services/viability')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', async (req, res) => {
  try {
    const finances = await Finance.findAll();
    const res = finances.map(getObject).map(getObject2).map(getValue).map(forInt).map(parseFloat).map(juros)
    console.log(res);
    res.status(200).json(res);
  } catch (err) {
    res.status(404).json('Não existe nenhum lançamento!');
  }
})

router.put('/juros/a', async (req, res) => {
  const {id} = await Finance.findAll({attributes: ['id', 'value']});
  try {

    res.status(200).json();
  } catch (err) {
    res.status(404).json('Não existe nenhum lançamento!');
  }
})

module.exports = router;