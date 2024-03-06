function imparOuPar(){
    let numbers = []

    for (let i = 0; i < 10; i++) {
        let number = Number(prompt('Insira um número: '));
        numbers.push(number);
    }

    let numPares = numbers.filter(function(numero){
        return numero % 2 === 0;
    });

    if (numPares.length > 0) {
        alert(`Números pares inseridos: ${numPares.join(', ')}`);
    } else {
        alert('Todos os números inseridos são ímpares');
    }
}

imparOuPar();
