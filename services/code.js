const express = require('express')
const app = express()
const Finance  = require('../models/finances')

const finance = Finance.findAll({
  attributes: ['id']
})
const code = finance

module.exports = code;