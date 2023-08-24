"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    id;
    name;
    cpf;
    rentedBike;
    constructor(id, nome, cpf, bicicletaAlugada) {
        this.id = id;
        this.name = nome;
        this.cpf = cpf;
        this.rentedBike = bicicletaAlugada;
    }
}
exports.Client = Client;
