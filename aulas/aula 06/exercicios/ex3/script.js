//Desenvolva um programa que leia a idade de 20 pessoas e apresente as idades acima da média.

function idades(){
    let idades = [18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]
    let tamanho = idades.length
    let media = 0
    let soma = 0

    idades.forEach(function(valor){
        soma += valor
    })

    media = soma / tamanho

    let maiorMedia = idades.filter(function(numero){
        return numero > media
    })

    alert(`A média dos valores é: ${media}`)
    alert(`As idades acima da média são: ${maiorMedia}`)

}

idades()