function nomes() {
    let names = ['eduarda', 'ingrid', 'emanuelle', 'maria luiza', 'juliana', 'isabelli', 'giovanna', 'pamella', 'adriana', 'mirair'];
    let stop = false;

    while (!stop) {
        let nome = prompt('Insira o nome que deseja pesquisar: ').toLowerCase();
        let found = false;

        for (let i = 0; i < names.length; i++) {
            if (nome === names[i]) {
                alert(`O nome está na nossa lista na posição ${i}`);
                found = true;
                break;
            }
        }

        if (!found) {
            alert('Nome não encontrado');
        }

        stop = confirm('Deseja continuar pesquisando?');
        if (stop == true){
            nomes()
        }else{
            break
        }
    }
}

nomes();
