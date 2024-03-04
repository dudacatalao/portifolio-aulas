//OPERADORES ARITMÉTICOS
// //exercício 1
// var1 = window.prompt('Digite um número:')
// var2 = window.prompt('Digite outro número:') 

// dif = var1 - var2
// window.alert(`A diferença entre os números é: ${dif}`)

// //exercício 2
// num = window.prompt('Insira um número: ')
// divisao = num /2
// if (divisao % 1 === 0) {
//     window.alert('O número é par');
// } else {
//     window.alert('O número não é par');
// }

// //exercício 3
// var1 = window.prompt('Digite um número:')
// var2 = window.prompt(`${var1} é multiplicado por...`)

// divisao = var1 / var2 


// if (divisao % 1 == 0){
//     window.alert('É multiplo')
// } else {
//     window.alert('Não é multiplo')
// }

// //exercicio 4
// celcius = window.prompt('Insira a temperatura em Celcius:')

// f = (celcius * 1.8) + 32

// window.alert(`A temperatura em Fahrenheit é ${f}°`)

// //exercicio 5
// base = prompt('Insira a base:')
// altura = prompt('Insira a altura:')

// area = base * altura

// alert(`A área é: ${area}`)

//EXERCÍCIOS DE FIXAÇÃO
//exercício 1
// let media = 10;
// let nota1 = parseFloat(window.prompt('Digite um número:'));
// let nota2 = parseFloat(window.prompt('Digite outro número:'));

// if (nota1 < media && nota2 < media) {
//     alert('As duas notas estão abaixo da média');
// } else if (nota1 < media || nota2 < media) {
//     if (nota1 < media) {
//         alert(`A nota ${nota1} está abaixo da média, e a nota ${nota2} está na média`);
//     } else {
//         alert(`A nota ${nota2} está abaixo da média, e a nota ${nota1} está na média`);
//     }
// } else {
//     alert('As duas notas estão na média');
// }

// let divisao1 = nota1 / 2;
// let divisao2 = nota2 / 2;

// if (divisao1 % 1 === 0 && divisao2 % 1 === 0 ) {
//     alert('As duas notas são pares');
// } else {
//     alert('Alguma das notas não é par');
// }

// //exercício 2
// let altura = prompt('Insira sua altura em metros:');
// let peso = prompt('Insira seu peso em quilogramas:');

// altura = parseFloat(altura);
// peso = parseFloat(peso);
// imc = peso / (altura ** 2);


// imc = imc.toFixed(2);

// if (imc < 18.5) {
//     alert(`Seu IMC é: ${imc}. Você está muito magro(a).`);
// } else if (imc >= 18.5 && imc < 24.9) {
//     alert(`Seu IMC é: ${imc}. Você está dentro da faixa de peso normal.`);
// } else if (imc >= 25.0 && imc < 29.9) {
//     alert(`Seu IMC é: ${imc}. Você está com sobrepeso.`);
// } else if (imc >= 30.0 && imc < 34.9) {
//     alert(`Seu IMC é: ${imc}. Você tem Obesidade grau 1.`);
// } else if (imc >= 35.0 && imc < 39.9) {
//     alert(`Seu IMC é: ${imc}. Você tem Obesidade grau 2.`);
// } else if (imc >= 40.0) {
//     alert(`Seu IMC é: ${imc}. Você tem Obesidade Mórbida.`);
// }

// //exercício 3
// let ano = prompt('Insira o ano: ')

// divisao = ano / 4

// if (divisao %1 == 0){
//     alert('O ano é bissexto')
// }else{
//     alert('O ano não é bissexto')
// }

//exercício 4
// Solicitar a taxa de câmbio e o valor desejado ao usuário
// var taxa = parseFloat(prompt("Digite a taxa de câmbio:"));
// var valorDesejado = parseFloat(prompt("Digite o valor desejado:"));
// var valorConvertido = taxa * valorDesejado;
// alert("O valor convertido é: " + valorConvertido);




