import { Correntista } from "./correntista"

export class Conta {
    saldo: number =  0.0
    numero: string
    dono: Correntista

    constructor (numero: string, dono: Correntista) {
        this.numero = numero
        this.dono = dono
    }

    credita(quantia: number) {
        this.saldo += quantia
    }
    debita(quantia: number) {
        this.saldo -= quantia
    }
}
