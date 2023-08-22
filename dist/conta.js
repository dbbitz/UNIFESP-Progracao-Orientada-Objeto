"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    saldo = 0.0;
    numero;
    dono;
    constructor(numero, dono) {
        this.numero = numero;
        this.dono = dono;
    }
    credita(quantia) {
        this.saldo += quantia;
    }
    debita(quantia) {
        this.saldo -= quantia;
    }
}
exports.Conta = Conta;
