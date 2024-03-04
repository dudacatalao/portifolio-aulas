//Desenvolva um programa que leia 10 números e apresente os valores pares. Caso não tenha nenhum número par apresente a mensagem “Todos os números são ímpares.”

function imparOuPar(){
    let numbers = []

    for (let i = 0; i < 10; i++) {
        let number = Number(prompt('Insira um número: '));
        numbers.push(number);
    }
}

imparOuPar()
