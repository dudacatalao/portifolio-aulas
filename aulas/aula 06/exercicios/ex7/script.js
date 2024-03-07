function nomes() {
    const names = ['eduarda', 'ingrid', 'emanuelle', 'maria luiza', 'juliana', 'isabelli', 'giovanna', 'pamella', 'adriana', 'mirair'];
    let stop = false;
    let tentativas = 0


    while (!stop || tentativas < 5) {
        tentativas += 1
        let nome = prompt('Insira o nome que deseja pesquisar: ').toLowerCase();
        let found = false;

        for (let i = 0; i < names.length; i++) {
            if (nome === names[i]) {
                alert(`O nome está na nossa lista na posição ${i}`);
                found = true;
            }
        }

        if (!found) {
            alert('Nome não encontrado');
        }

        // stop = confirm('Deseja continuar pesquisando?');
        // if (stop == true){
        //     nomes()
        // }else{
        //     break
        // }
    }
}

nomes();
