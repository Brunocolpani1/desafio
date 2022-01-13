const forInt = i => i.split('-')
const one = i => i[0]
const id = ["8efd789d-52a1-4e86-bb68-c806289170dc"]
function getCode(id){
  return id.map(forInt).map(one).toString().toUpperCase()
}



module.exports = getCode;