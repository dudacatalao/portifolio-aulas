function integerNumbers() {
    let vetorA = [];
    let vetorB = [];

    for (let i = 0; i < 5; i++) {
        let numberA = parseInt(prompt('Insira um número para o Vetor A:'));
        vetorA.push(numberA);
    }

    for (let i = 0; i < 5; i++) {
        let numberB = parseInt(prompt('Insira um número para o Vetor B:'));
        vetorB.push(numberB);
    }

    let vetorC = [];

    for (let i = 0; i < 5; i++) {
        vetorC.push(vetorA[i], vetorB[i]);
    }

    alert('Vetor A:');
    alert(vetorA.join(','));

    alert('Vetor B:');
    alert(vetorB.join(','));

    alert('Vetor C:');
    alert(vetorC.join(','));
}

integerNumbers();
