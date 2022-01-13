const getObject = json => JSON.stringify(json);
const getObject2 = json => JSON.parse(json);
const getValue = value => value.value;
const getId = id => id.id;
const forInt = i => i.split(',');
const juros = i => (i + 0.01) + 1;

const fees = 0.01;

/**
 * Representa a soma de juros composto até a data do dia 01/03/2023.
 * @constructor
 * @param {number} startCapital - Valor aplicado até o momento.
 * @param {number} interestRate - Valor do juros.
 * @param {number} applicationTime - Os dias que faltam para a data 01/03/2023.
 */
function aplicacao(startCapital, interestRate, applicationTime) {
  applied = (startCapital + interestRate) + applicationTime;
  function compoundInterest(applicationTime) {
    let compoundinterest = this.applied * applicationTime;
  }
  return compoundInterest;
}

/**
 * Representa se é possivel viajar ou não com o valor de juros composto até a data de viagem 
 * @constructor
 * @param {number} value - Valor de juros compsoto até a data do dia 01/03/2023.
 */

function viability(value) {
  console.log(value);
  if (value / 2 >= 30000) {
    return goCancun = true;
  }
  return goCancun = false;
}

module.exports = { getObject, getObject2, getValue, forInt, aplicacao, viability, fees, juros, getId };
