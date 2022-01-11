const now = new Date(); // Data de hoje
const past = new Date('2023-03-01'); // Outra data no passado
const diff = Math.abs(past.getTime() - now.getTime()); // Subtrai uma data pela outra
const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

const fees = 0.01;

const getObject = json => JSON.stringify(json)
const getObject2 = json => JSON.parse(json) 
const getValue = value => value.value
const forInt = i => i.split(',')

function aplicacao(startCapital, interestRate, applicationTime ){
    applied = (startCapital + interestRate) + applicationTime;
        function compoundInterest (applicationTime){
             let compoundinterest  = this.applied * applicationTime;                
         }
    return compoundInterest
}

function viability(value){
    if(value / 2 >= 30000){
      return goCancun = true;
    }
    return false;
  }



module.exports = {days, getObject, getObject2,getValue,forInt, aplicacao, viability, fees };
