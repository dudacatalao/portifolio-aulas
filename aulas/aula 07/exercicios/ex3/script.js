class User {
    constructor(nameUser, email, password) {
        this.nameUser = nameUser;
        this.email = email;
        this.password = password;
    }
}

class Authentication {
    constructor() {
        this.users = [];
    }

    register() {
        alert('Olá, seja bem-vindo ao nosso sistema');
        let name = prompt('Insira seu nome completo: ');
        let email = prompt('Insira seu email: ');
        let senha = prompt('Insira sua senha: ');

        if (senha) {
            let confirmacao = prompt('Confirme a senha: ');

            if (senha === confirmacao) {
                alert('Cadastro realizado com sucesso!');
                const newUser = new User(name, email, senha);
                this.users.push(newUser); 
            } else {
                alert('As senhas não coincidem');
                this.register();
            }
        } else {
            alert('Você precisa criar uma senha');
            this.register();
        }

        console.log(this.users)
    }

    login() {}

    logout() {}

    menu() {}
}


const auth = new Authentication();
auth.register();
console.log(auth.users); 
