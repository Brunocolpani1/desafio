const carros = [{"id":"5199c879-292e-4574-abdb-5d6c383d50b4","code":null,"value":"850","date":"2021-10-01","note":"Teste1","person":"482fab67-82c8-429e-8521-ba18215cc010","createdAt":"2022-01-10T19:18:24.766Z","updatedAt":"2022-01-10T19:18:24.766Z"},{"id":"8efd789d-52a1-4e86-bb68-c806289170dc","code":null,"value":"850","date":"2021-10-01","note":"Teste1","person":"482fab67-82c8-429e-8521-ba18215cc010","createdAt":"2022-01-10T19:18:26.665Z","updatedAt":"2022-01-10T19:18:26.665Z"},{"id":"de7e8e28-7422-4773-a517-3ff566af0e39","code":null,"value":"850","date":"2021-10-01","note":"Teste1","person":"482fab67-82c8-429e-8521-ba18215cc010","createdAt":"2022-01-10T19:18:27.342Z","updatedAt":"2022-01-10T19:18:27.342Z"},{"id":"df72ed11-a990-4cea-99d8-a7a2ff7c61ca","code":null,"value":"850","date":null,"note":"Teste1","person":"482fab67-82c8-429e-8521-ba18215cc010","createdAt":"2022-01-10T20:01:19.637Z","updatedAt":"2022-01-10T20:01:19.637Z"},{"id":"ed73b162-7151-46eb-8aea-cdc230ee45be","code":null,"value":"850","date":"2022-11-01","note":"Teste1","person":"482fab67-82c8-429e-8521-ba18215cc010","createdAt":"2022-01-11T11:53:32.793Z","updatedAt":"2022-01-11T11:53:32.793Z"},{"id":"ee0ec1de-494f-42fd-bbb7-8205c03b95f3","code":null,"value":"850","date":"2022-11-01","note":"Teste1","person":"482fab67-82c8-429e-8521-ba18215cc010","createdAt":"2022-01-11T12:12:57.685Z","updatedAt":"2022-01-11T12:12:57.685Z"},{"id":"615bab2e-4840-4db6-a0aa-87d5376a350f","code":"","value":"850","date":"2022-11-01","note":"Teste1","person":"482fab67-82c8-429e-8521-ba18215cc010","createdAt":"2022-01-11T12:13:30.629Z","updatedAt":"2022-01-11T12:13:30.629Z"},{"id":"3e483456-251d-49a2-adde-d62a8a180a45","code":"","value":"850","date":"2022-11-01","note":"Teste1","person":"482fab67-82c8-429e-8521-ba18215cc010","createdAt":"2022-01-11T12:13:31.547Z","updatedAt":"2022-01-11T12:13:31.547Z"},{"id":"e4abad46-ef4b-4199-a565-bac9529a3f17","code":"","value":"850","date":"2022-11-01","note":"Teste1","person":"482fab67-82c8-429e-8521-ba18215cc010","createdAt":"2022-01-11T12:14:48.348Z","updatedAt":"2022-01-11T12:14:48.348Z"},{"id":"3f122bd3-c9f6-437b-8ea6-688df12d5aac","code":"","value":"850","date":"2022-11-01","note":"Teste1","person":"482fab67-82c8-429e-8521-ba18215cc010","createdAt":"2022-01-11T12:14:49.318Z","updatedAt":"2022-01-11T12:14:49.318Z"},{"id":"e3587d33-9d3a-4505-a52b-22024adbf194","code":null,"value":"850","date":"2022-11-01","note":"Teste1","person":"482fab67-82c8-429e-8521-ba18215cc010","createdAt":"2022-01-11T12:15:58.640Z","updatedAt":"2022-01-11T12:15:58.640Z"}]
const days = 365

const getObject = json => JSON.stringify(json)
const getObject2 = json => JSON.parse(json) 
const getValue = value => value.value // Pegando o valor do Objeto
const forInt = i => i.split(',')


const response = carros.map(getObject).map(getObject2).map(getValue).map(forInt).map(parseFloat).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual
  })
console.log(response);
console.log('Agora o juros');

let aplicado = 0;
let goCancun = false;
function aplicacao(capitalInicial, taxaDeJuros, tempoDeAplicacao){
    aplicado = (capitalInicial + taxaDeJuros) + tempoDeAplicacao;
        function jurosComposto (tempoDeAplicacao){
            let juroscomposto = this.aplicado * tempoDeAplicacao;
        }
        function goingCancun(valortotal){
          let total = this.juroscomposto;
          console.log(total);
          if(total / 1 === 30000){
            return goCancun = true;
          }
          return goCancun = false;
        }  
    }
aplicacao(response, 0.01, days)
    