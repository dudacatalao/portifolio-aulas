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

    login() {
        let email = prompt('Insira seu email:')
        let senha = prompt('Insira sua senha:')

        if(email in this.users.email ||senha in this.users.senha ){
            alert('Logado com sucesso!')
        }else{
            alert('Você ainda não possui conta')
            let option = prompt('Deseja criar uma?')

            if (option == true){
                alert('Redirecionando para o sistema de cadastro')
                this.register()
            }else{
                alert('Obtigada!')
            }
        }
    }

    logout() {}

    menu(){
        alert('Olá, seja bem-vindo ao nosso sistema');
        let optionUser = Number(prompt('O que deseja realizar\n[1] Realizar Cadastro\n[2] Login\n[3] Logout'))

        switch (optionUser){
            case 1:
                alert('Redirecionando para o sistema de cadastro..')
                this.register()
            case 2:
                alert('Redirecionando para a área de Login..')
                this.login()
            case 3:
                alert('Redirecionando para a área de Logout')
                this.logout()
        }
    }
}


const auth = new Authentication();
while (true){
    auth.menu();
    console.log(auth.users); 
}
