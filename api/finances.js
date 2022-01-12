const express = require('express');
const router = express.Router();
const Finance  = require('../models/finances');
const bodyParser = require('body-parser');
const dateBrasil = require('../services/date')


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/', async (req, res) => {
  try{
    const finances = await Finance.findAll();
    res.status(200).json(finances);
  } catch(err){
    res.status(404).json('Não existe nenhum lançamento!');
  }
  })

  router.get('/:id', async (req, res) => {
    try{
      const finance = await Finance.findByPk(req.params.id);
      res.status(200).json(finance)
    } catch{
      res.status(400).json('Não existe o lançamento informado!')
    }
  })

  router.post('/',
    async (req, res) => {
      const {value, note, person, date = dateBrasil, code} = req.body
      try{
        await Finance.create({
          value,
          note,
          person,
          date,
          code
        })
        res.status(201).json('Saldo cadastrado com sucesso!')
      } catch{
        res.status(400).json('Não foi possivel cadastrar o lançamento!!')
      }
  })

  router.put('/:id', async (req, res) => {
    const finance = await Finance.findByPk(req.params.id);
    finance.value = req.body.value,
    finance.note = req.body.note,
    finance.person = req.body.person,
    finance.date = req.body.date
    try{
      await finance.save();
      res.status(200).json('Lançamento atualziado com sucesso!');
    } catch{
      res.status(404).send('Lançamento não existe!');
    } 
  })

  router.delete('/:id', async (req, res) => {
    const finance = await Finance.findByPk(req.params.id);
    try{
      finance.destroy();
      res.status(200).json('Saldo excluido com sucesso');
    } catch(err){
      res.status(404).json('Não existe nenhum lançamento!');
    }
  })
  
  module.exports = router;