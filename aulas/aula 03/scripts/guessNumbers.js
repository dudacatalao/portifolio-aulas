function guessNumbers() {
    let acertou = false;
    let numberUser = prompt('Insira um número de 1 a 100: ');

    if (!isNaN(numberUser)) {
        let numberUserInt = parseInt(numberUser);
        console.log(typeof(numberUserInt));

        while (!acertou) {
            let numero = Math.floor(Math.random() * 100) + 1;

            if (numero === numberUserInt) {
                acertou = true;
                alert('Acertamos o seu número!!');
            } else {
                alert('Não foi dessa vez!');
                guessNumbers()
            }
        }
    } else {
        alert('Por favor, insira um número válido.');
        guessNumbers();
    }
}

guessNumbers();
