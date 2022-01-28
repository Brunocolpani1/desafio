const express = require('express');
const router = express.Router();
const Finance = require('../models/finances');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', async (req, res) => {
  const finances = await Finance.findAll()
  try {
    for (const finance of finances) {
      if (finance.id) {
       finance.value = (parseFloat(finance.value) * 0.01) + parseFloat(finance.value)
       console.log(finances);
       await Finance.create({value} )
      }
    }
     
    
    res.status(200).json('Lançamento atualziado com sucesso!');
  } catch (err) {
    res.status(404).json('Não existe nenhum lançamento!');
  }
})

module.exports = router;