const date = new Date();
const dateBrasil = new Intl.DateTimeFormat('pt-BR').format(date);


module.exports = dateBrasil;