class Banco {
    constructor(saldo, tipo) {
        this._saldo = saldo;
        this._tipo = tipo;
    }

    get saldo() {
        return this._saldo;
    }

    sacar() {
        let valor = parseFloat(prompt('Insira o valor que deseja sacar: '));

        if (isNaN(valor) || valor <= 0) {
            alert('Valor inválido');
            return;
        }

        if (valor > this._saldo) {
            alert('Saldo insuficiente');
        } else {
            this._saldo -= valor;
            alert(`Saldo atual: R$ ${this._saldo}`);
            this.sacar()
        }
    }
}

let minhaConta = new Banco(1000, "Corrente");
minhaConta.sacar();

class contaCorrente extends Banco{
    constructor(){

    }
}

class contaPoupanca extends Banco{
    constructor(limite, limiteTransacoes){
        this._limite = limite
        this._limiteTransacoes = limiteTransacoes
    }
}
