const express = require('express');
const router = express.Router();
const User  = require('../models/users');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));


router.get('/', async (req, res) => {
  try{
    const users = await User.findAll();
    res.status(200).json(users);
  }  catch(err){
    res.status(404).json('UNão existe usuarios cadastrados!');
  }
  })

  router.get('/:id', async (req, res) => {
    try{
      const user = await User.findByPk(req.params.id);
      res.status(200).json(user);
    } catch(err){
      res.status(404).json('Usuario não existe!');
    }
  })

  router.post('/', async (req, res) => {
    const {name} = req.body;
   try{
    await User.create({name});
    res.status(201).json('Usuario cadastrado com sucesso!');
   } catch(err){
    res.status(400).send('Não foi possível cadastrar novo usuario!');
   }
  })

  router.put('/:id', async (req, res) => {
    const {id} = await User.findByPk(req.params.id) 
    const {name} = req.body; 

    const user = users.findIndex((users) => users.id == id)
    try{
      await User.assign({name})   
      res.status(200).json('Usuario atualziado com sucesso!');
    } catch{
      res.status(404).send('Usuario não existe!');
    } 
  })

  router.delete('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    try{
     await user.destroy();
      res.status(200).json('Usuario excluido com sucesso');
    } catch{
      res.status(404).send('Usuario não existe!');
    }
  })
 
  module.exports = router;