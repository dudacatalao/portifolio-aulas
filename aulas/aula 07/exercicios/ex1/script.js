class Banco {
    constructor(saldo) {
        this._saldo = saldo;
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
        }
    }
}

class contaCorrente extends Banco{
    constructor(saldo, numero_cheques, numero_cartaoCredito){
        super(saldo);
        this.numero_cheques = numero_cheques;
        this.numero_cartaoCredito = numero_cartaoCredito;
    }

    emitirCheque() {
        let beneficiario = prompt('Insira o nome do beneficiário do cheque: ');
        let valorCheque = parseFloat(prompt('Insira o valor do cheque: '));
        
        alert(`Conferindo informações\nBeneficiário: ${beneficiario}\nValor do cheque: R$ ${valorCheque}`);
    }
}

class contaPoupanca extends Banco{
    constructor(saldo, limite, limiteTransacoes){
        super(saldo);
        this._limite = limite;
        this._limiteTransacoes = limiteTransacoes;
    }
}

let minhaContaCorrente = new contaCorrente(1000);
minhaContaCorrente.sacar();
minhaContaCorrente.emitirCheque(); 