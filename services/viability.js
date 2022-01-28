const getObject = json => JSON.stringify(json);
const getObject2 = json => JSON.parse(json);
const getValue = value => value.value;
const getId = id => id.id;
const getPerson = p => p.person
const forInt = i => i.split(',');
const juros = i => (i * 0.01) + i;

const fees = 0.01;

/**
 * Representa a soma de juros composto até a data do dia 01/03/2023.
 * @constructor
 * @param {number} startCapital - Valor aplicado até o momento.
 * @param {number} interestRate - Valor do juros.
 * @param {number} applicationTime - Os dias que faltam para a data 01/03/2023.
 */
const aplicacao = (startCapital, interestRate, applicationTime) => {
  let applied = (startCapital + interestRate) + applicationTime;
  function compoundInterest(applicationTime) {
    let compoundinterest = this.applied * applicationTime;
  }
  return applied
}

/**Pega todas as ids de pessoas que fizeram depositos e devolve filtrada apenas um indice de id depostiado*/
const getPeople = (finances) => {
  return finances.map(getPerson).filter((value, index, person) => {
    return person.indexOf(value) === index
  });
}

/**
 * Representa se é possivel viajar ou não com o valor de juros composto até a data de viagem 
 * @constructor
 * @param {number} value - Valor de juros compsoto até a data do dia 01/03/2023.
 * @param {number} person - Valor de pessoas que fizeram depositos.
 */
const viability = (value, person) => {
  if (value / person >= 30000) {
    return true;
  }
  return false;
}

module.exports = { getObject, getObject2, getValue, forInt, getPeople, aplicacao, viability, fees, juros, getId };
