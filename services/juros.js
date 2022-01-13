const schedule = require('node-schedule');
const Finance = require('../models/finances');
const arrayJuros = require('./totalValue');

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 7)];
regra.hour = 00;
regra.minute = 00;

/** Essa função gera o calculo de juros todos os dias às 00:00 e salva os valores atualziados no banco de dados. */
const tarefa = schedule.scheduleJob(regra, async function () {
  const finance = await Finance.findAll({
    attributes: ['value']
  });
  arrayJuros(finance);
});

