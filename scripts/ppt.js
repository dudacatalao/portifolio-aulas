function ppt(){
    let options = ['PEDRA', 'PAPEL', 'TESOURA'];
    let ganhou = false;
    let userChoice = prompt('Escolha o seu elemento:').toUpperCase();

    while(!ganhou){
        let randomIndex = Math.floor(Math.random() * options.length);
        let element = options[randomIndex];

        if (userChoice === element){
            alert('mesmo elemento');
            ppt();
        } else if(userChoice === 'PEDRA' && element === 'TESOURA'){
            alert('Você ganhou!');
            ganhou = true;
        } else if (userChoice === 'TESOURA' && element === 'PAPEL'){
            alert('Você ganhou!');
            ganhou = true;
        } else if (userChoice === 'PAPEL' && element === 'PEDRA'){
            alert('Você ganhou!');
            ganhou = true;
        } else {
            alert('Você perdeu!');
            ganhou = true;
        }
    }   
}

ppt();
