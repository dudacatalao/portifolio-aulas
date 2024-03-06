function nomes() {
    let names = ['Eduarda', 'Ingrid', 'Emanuelle', 'Maria Luiza', 'Juliana', 'Isabelli', 'Giovanna', 'Pamella', 'Adriana', 'Mirair'];
    let stop = true

    while (stop == true){
        let nome = prompt('Insira o nome que deseja pesquisar: ')

        if (nome in names){
            alert(`O nome está na nossa lista na posição ${nome[]}`) //arrumar
        }
    }

    let numbersString = numbers.join(', ');

    alert('Números válidos inseridos: ' + numbersString);
}

nomes();

//Desenvolva um programa que a partir de um vetor de Strings com 10 nomes inicializados na declaração 
 // leia um novo nome e verifique se ele está armazenado no vetor, se estiver, apresenta a posição (índice) onde ele está, 
//caso contrário, apresente a mensagem “Nome não encontrado!”
