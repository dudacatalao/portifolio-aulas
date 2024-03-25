class Livros {
    constructor(nome, autor, identificador, categoria, quantidade, disponivel) {
        this.nome = nome;
        this.autor = autor;
        this.identificador = identificador;
        this.categoria = categoria;
        this.quantidade = quantidade;
        this.disponivel = disponivel;
    }

    livros = [
        { identificador: 1, nome: 'é assim que acaba', autor: 'Collen Hoover', categoria: 'Romance', disponivel: true },
        { identificador: 2, nome: 'é assim que começa', autor: 'Collen Hoover', categoria: 'Romance', disponivel: true },
        { identificador: 3, nome: 'daisy jones & the six', autor: 'Taylor Reid', categoria: 'Ficção', disponivel: true },
        { identificador: 4, nome: 'divergente', autor: 'Veronica Roth', categoria: 'Ficção', disponivel: true }
    ];
}

class Livraria extends Livros {
    constructor() {
        super();
    }

    menu() {
        let escolhaUser = Number(prompt('O que deseja realizar:\n[1] Escolher um Livro\n[2] Realizar devolução\n[3] Sair'));

        switch (escolhaUser) {
            case 1:
                this.emprestimo();
                break;
            case 2:
                this.devolucao();
                break;
            case 3:
                process.exit();
                break;
            default:
                alert('Opção inválida');
        }
    }

    emprestimo() {
        let livroEscolhido = prompt('Qual o livro que deseja?').toLocaleLowerCase();
        let livroEncontrado = this.livros.find(livro => livro.nome === livroEscolhido);

        if (livroEncontrado) {
            if (livroEncontrado.disponivel) {
                alert(`Livro ${livroEncontrado.nome} disponível para empréstimo.`);
                livroEncontrado.disponivel = false;
                alert('Você deve devolver o livro em 6 dias.');
            } else {
                alert('Este livro não está disponível.');
            }
        } else {
            alert('Livro não encontrado.');
        }
    }

    devolucao() {
        let livroDevolucao = prompt('Qual o livro que deseja devolver?').toLocaleLowerCase();
        let livroEncontrado = this.livros.find(livro => livro.nome === livroDevolucao);

        if (livroEncontrado) {
            if (livroEncontrado.disponivel){
                alert('Este livro não foi emprestado')
            }else{
                alert(`Obrigado pela devolução do livro ${livroEncontrado.nome}.`);
                livroEncontrado.disponivel = true;
            }
        } else {
            alert('Este livro não é da nossa livraria.');
        }
    }
}

const livraria = new Livraria();
while (true){
    livraria.menu();
}
