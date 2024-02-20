function tabuada(){
  const number = prompt('Insira o número que deseja a tabuada: ')

  for(index = 1; index < 11; index++ ){
    multiplica = number * index
    alert(`${number} * ${index} = ${multiplica}`)
  }
}

tabuada()