function dobroValores(){
    let numbers = []

    for (let i = 0; i < 5; i++){
        number = Number(prompt('Insira um número:'))
        numbers.push(number)
    }

    alert('Valores inseridos:')
    numbers.forEach(function(valor){
        alert(valor)
    })

    alert('Dobro dos valores:')
    numbers.forEach(function(valor){
        alert(valor+valor)
    })
}

dobroValores()