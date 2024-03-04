export default function seq_fibonacci() {
  let anterior = 0;
  let atual = 1;
  const sequencia = [anterior, atual];

  for (let index = 2; index < 17; index++) {
      const proximo = anterior + atual;
      sequencia.push(proximo);
      anterior = atual;
      atual = proximo;
  }

  console.log(`Sequencia Fibonacci: ${sequencia}`);
  alert(`Sequencia Fibonacci: ${sequencia}`);


  const text = document.getElementById("content");
  // 
  document.body.innerHTML(sequencia)
  return sequencia;
}

seq_fibonacci();
