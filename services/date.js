/** Retorna o valor de quantos dias faltam até o dia 01/03/2023. */
const now = new Date(); // Data de hoje
const future = new Date('2023-03-01'); // Outra data no passado
const diff = Math.abs(future.getTime() - now.getTime()); // Subtrai uma data pela outra
const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).


module.exports = days;