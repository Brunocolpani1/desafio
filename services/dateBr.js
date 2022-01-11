function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formatDate(date){
    const DD = zeroAEsquerda(date.getDate());
    const MM = zeroAEsquerda(date.getMonth() + 1);
    const YYYY = zeroAEsquerda(date.getFullYear());

    return `${DD}/${MM}/${YYYY}`;
}

const data = new Date();
const dateBrasil = formatDate(data);
console.log(dateBrasil);

module.exports = dateBrasil;