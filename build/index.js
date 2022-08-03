"use strict";
class ContaBancaria {
    nomeTitular;
    tipo;
    numero;
    agencia;
    saldo;
    ativa = true;
    constructor({ nomeTitular, saldo = 0, numero, agencia, tipo }) {
        this.nomeTitular = nomeTitular;
        this.tipo = tipo;
        this.numero = numero;
        this.saldo = saldo;
        this.agencia = agencia;
        console.log(`${this.nomeTitular}, Bem vindo ao banco Frogers`);
    }
    meuSaldo = () => this.saldo;
    depositar = (valor) => {
        if (!this.ativa) {
            console.log('Conta desativada, impossível realizar depósito');
            return this.ativa;
        }
        ;
        this.saldo += valor;
        console.log(`Você depositou ${valor}, seu saldo agora é: ${this.saldo}`);
    };
    sacar = (valor) => {
        if (!this.ativa) {
            console.log('Conta desativada, impossível realizar saque');
            return this.ativa;
        }
        if (valor <= this.saldo) {
            this.saldo = this.saldo - valor;
            console.log(`Você sacou ${valor}, seu saldo agora é: ${this.saldo}`);
            return this.ativa;
        }
        console.log(`Operação negada! Saldo insuficiente. Você possui ${this.saldo} na sua conta`);
        return this.ativa;
    };
    CancelarConta = () => {
        if (this.saldo === 0) {
            this.ativa = false;
            console.log('Conta desativada');
            return this.ativa;
        }
        console.log(`Não é possivel desavitar sua conta. Conta com pendências`);
    };
}
/*const Conta1:ContaBancaria = new ContaBancaria({nomeTitular: 'will', agencia: 444, numero: 321, tipo: 'conrrente'})
Conta1.depositar(500)

Conta1.sacar(200)
console.log(Conta1.meuSaldo())*/
//Conta1.CancelarConta()
//Conta1.depositar(100)
