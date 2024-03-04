let n1 = document.getElementsByClassName('num1')
let n2 = document.getElementsByClassName('num2')

function Calculadora(n1, n2){
    
    let escolha = prompt('Que operação deseja realizar?').toLowerCase()

    if (escolha == 'soma'){
        return alert( Number(n1) + Number(n2))

    }else if (escolha == 'subtração'){
        if(n1 > n2){
            return alert(Number(n1) - Number(n2))
        }else{
            return alert(Number(n2) - Number(n1))
        }

    }else if(escolha == 'multiplicação'){
        return alert(Number(n1) * Number(n2))

    }else if (escolha == 'divisão'){
        if(Number(n1) > Number(n2)){
            return alert(Number(n1) / Number(n2))
        }else{
            return  alert(Number(n2) / Number(n1))
        }

    }else if (escolha == 'exponenciação'){
        alert(`Expoente de ${n1} é : ${Math.exp(Number(n1))}`)
        alert(`Expoente de ${n2} é : ${Math.exp(Number(n2))}`)

    }else if (escolha == 'raiz quadrada'){
        alert(`Raiz Quadrada de ${n1} é : ${Math.sqrt(Number(n1))}`)
        alert(`Raiz Quadrada de ${n2} é : ${Math.sqrt(Number(n2))}`)

    }else if(escolha == 'finobacci'){

        let anterior = 0
        let atual = 0
        const sequencia = [anterior, atual]

        for(let index = 2; index < 10; index++){
            const proximo = anterior + atual
            sequencia.push(proximo)
            anterior = atual
            atual = proximo
        }
        return alert(sequencia)

    }else if(escolha == 'fatorial'){
        fact = 1
        for (let index = 2; index < n1; index++){
            fact = fact + index
        }
        return alert(fact)
    }
}



Calculadora(n1, n2)
