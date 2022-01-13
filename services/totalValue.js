const { getObject, getObject2, getValue, forInt } = require('./viability');

/**
 * Representa o valor total de depositos.
 * @constructor
 * @param {number} finance - Valores depostidados por todos os usuarios
 */
const totalValue = (finance) => {
  return finance.map(getObject).map(getObject2).map(getValue).map(forInt).map(parseFloat).reduce(function (acumulator, atual) {
    return acumulator + atual
  });
}

/**
 * Representa um array com todos os valores depostidaos e é feito a soma de juros sobre juros em todos eles.
 * @constructor
 * @param {number} finance - Valores depostidados por todos os usuarios
 */
const arrayJuros = (finance) => {
  return finance.map(getObject).map(getObject2).map(getValue).map(forInt).map(parseFloat).map(juros);
};


module.exports = { totalValue, arrayJuros };