function mediaAritmetica() {
    let numbers = [];
    let soma = 0;

    for (let i = 0; i < 8; i++) {
        let number = Number(prompt('Insira um número: '));
        numbers.push(number);
    }

    let tamanho = numbers.length;
    let media = 0;

    numbers.forEach(function (valor) {
        soma += valor;
    });

    media = soma / tamanho;

    alert(media);
}

mediaAritmetica();
