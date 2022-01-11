const { getObject, getObject2,getValue,forInt} = require('./viability');
const totalValue = (finance) => {
    return finance.map(getObject).map(getObject2).map(getValue).map(forInt).map(parseFloat).reduce(function(acumulator, atual){
        return acumulator + atual
      }) 
}


module.exports = totalValue;