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

    depositar() {
        let valor = parseFloat(prompt('Insira o valor que deseja depositar: '))

        if (isNaN(valor) || valor <= 0) {
            alert('Valor inválido')
            this.depositar()
        } else {
            this._saldo += valor
            alert(`Saldo atual: R$ ${this._saldo}`)
        }

    }
}

class contaCorrente extends Banco {
    constructor(saldo, numero_cheques, numero_cartaoCredito) {
        super(saldo);
        this.numero_cheques = numero_cheques;
        this.numero_cartaoCredito = numero_cartaoCredito;
    }

    emitirCheque() {
        alert('Conta Corrente')
        let beneficiario = prompt('Insira o nome do beneficiário do cheque: ');
        let valorCheque = parseFloat(prompt('Insira o valor do cheque: '));

        alert(`Conferindo informações\nBeneficiário: ${beneficiario}\nValor do cheque: R$ ${valorCheque}`);
    }
}

class contaPoupanca extends Banco {
    constructor(saldo, taxaJurosAnual) {
        super(saldo);
        this._taxaJurosAnual = taxaJurosAnual;
    }

    renderJuros() {
        let taxaJurosMensal = this._taxaJurosAnual / 12;
        let juros = this._saldo * (taxaJurosMensal / 100);

        this._saldo += juros;
        alert(`Juros adicionados: R$ ${juros.toFixed(2)}\nSaldo atual: R$ ${this._saldo.toFixed(2)}`);
    }
}

alert('Bem Vindo(a) ao Sistema Bancário')
let option = Number(prompt('Deseja ver sua conta\n[1] Corrente\n[2] Poupança'))

if (option == 1){
    let saldo = Number(prompt('Insira o valor do seu saldo bancario inicial:'))
    let minhaContaCorrente = new contaCorrente(saldo);
     minhaContaCorrente.sacar();
     minhaContaCorrente.depositar()
     minhaContaCorrente.emitirCheque()
}else if(option == 2){
    let saldo = Number(prompt('Insira o valor do seu saldo bancario inicial:'))
    let minhaContaPoupança = new contaPoupanca(saldo)
    minhaContaPoupança.sacar()
    minhaContaPoupança.renderJuros()
}

 

