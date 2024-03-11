//. Desenvolva uma nova versão do programa anterior em que o usuário terá a quantidade de tentativas limitada a 5. 
//Caso o nome seja encontrado apresente a posição (índice) onde ele está e em qual tentativa ele foi encontrado.

function nomesSecondVersion() {
    let names = ['eduarda', 'ingrid', 'emanuelle', 'maria luiza', 'juliana', 'isabelli', 'giovanna', 'pamella', 'adriana', 'mirair'];
    let stop = false;
    let tentativas = 5

    while (!stop || tentativas < 5) {
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
            tentativas -= 1
        }

        if (found){
            break
        }

        if (tentativas == 0){
            alert("Suas tentativas acabaram")
            break
        }

        
    }
}

nomesSecondVersion();
