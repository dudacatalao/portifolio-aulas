
function integerNumbers() {
    let vetorA = [];
    let vetorB = [];

    for (let i = 0; i < 6; i++) {
        let number = parseInt(prompt('Insira um número inteiro:'));
        vetorA.push(number);
    }

    let tamanhoB = vetorA.length / 2;
    for (let i = 0; i < tamanhoB; i++) {
        vetorB.push(vetorA[i]);
    }

    alert('Vetor A:');
    alert(vetorA.join(', '));

    alert('Vetor B:');
    alert(vetorB.join(', '));

}

integerNumbers();
