import { Bike } from "./bike"

export class Client {
    id: number;
    name: string;
    cpf: string;
    rentedBike: string;

    constructor(id: number, nome: string, cpf: string, bicicletaAlugada: Bike | null) {
        this.id = id;
        this.name = nome;
        this.cpf = cpf;
        this.rentedBike = bicicletaAlugada?.model || "None";
    }


    
}
