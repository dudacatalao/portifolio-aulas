function numbersBetween() {
    let numbers = [];

    for (let i = 0; i < 8; i++) {
        let number = Number(prompt('Insira um número: '));

        if (number < 100 || number > 200) {
            alert('Valor inválido');
        } else {
            numbers.push(number);
        }
    }

    let numbersString = numbers.join(', ');

    alert('Números válidos inseridos: ' + numbersString);
}

numbersBetween();