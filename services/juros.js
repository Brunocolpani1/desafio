const cron = require("node-cron");
const Finance = require('../models/finances');
const { getObject, getObject2, getValue, forInt, juros } = require('./viability')


/** Essa função gera o calculo de juros todos os dias às 00:00 e salva os valores atualziados no banco de dados. */
cron.schedule("0 0 * * *", () => {
    const valor = finance.map(getObject).map(getObject2).map(getValue).map(forInt).map(parseFloat).map(juros)
    console.log(valor);
    return valor
})
