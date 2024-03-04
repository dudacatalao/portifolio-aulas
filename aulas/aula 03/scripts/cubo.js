function cubo() {
  let lista = []; 
  for (let index = 0; index < 11; index++) {
    let cubo = Math.pow(index, 3);
    lista.push(cubo);
  }
  return lista; 
}


let resultado = cubo(); 
function somarLista(lista) {
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }
  return soma;
}

let listaDeCubos = cubo(); 
let resultadoSoma = somarLista(listaDeCubos); 
console.log(resultado); 
console.log("A soma dos cubos é:", resultadoSoma);




