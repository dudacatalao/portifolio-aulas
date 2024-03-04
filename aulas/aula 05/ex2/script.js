function ImparOuPar(numero){

    if (numero % 2 ==0){
        alert('O número é par')
    }else{
        alert('O número é impar')
    }
}

let number = prompt('Insira um número: ')
ImparOuPar(number)