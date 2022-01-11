const schedule = require('node-schedule')
const Finance = require('../models/finances')
const {days, getObject, getObject2,getValue,forInt, fees} = require('./viability')

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 7)]
regra.hour = 00
regra.minute = 00

const tarefa = schedule.scheduleJob(regra, async function(){
    const finance = await Finance.findAll({
        attributes: ['value']
      });
    const res = finance.map(getObject).map(getObject2).map(getValue).map(forInt).map(parseFloat).forEach(i => (i + fees) * days)
    console.log(res);
} )
console.log(tarefa);
