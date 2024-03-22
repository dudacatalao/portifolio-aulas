class Livros{
    constructor(nome,autor,identificador,categoria, quantidade){
        this.nome = nome;
        this.autor = autor;
        this.identificador = identificador;
        this.categoria = categoria;
        this.quantidade = quantidade
    }

    livros = {
        nome: 'É assim que acaba',
        autor: 'Collen Hoover',
        identificador: 1,
        
    }
}

class Livraria extends Livros{
    emprestimo(){
        let livroEscolhido = prompt('Qual o livro que deseja?')


    }
}