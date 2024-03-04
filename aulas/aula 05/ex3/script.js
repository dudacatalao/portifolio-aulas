function Maior(n1, n2, n3){
    maior_Numero = Math.max(n1,n2,n3)
    return maior_Numero
}

n1 = prompt('Insira o 1 número:')
n2 = prompt('Insira o 2 número:')
n3 = prompt('Insira o 3 número:')

alert(`O maior número dos inseridos é o ${Maior(n1,n2,n3)}`)
