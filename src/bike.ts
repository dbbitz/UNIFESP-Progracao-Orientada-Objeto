import { Client } from "./client";

export class Bike {
    id: number;
    model: string;
    leased: boolean;
    client: string;

    constructor(id: number, model: string, leased: boolean, client: Client | null) {
        this.id = id;
        this.model = model;
        this.leased = leased;
        this.client = client?.name || "None";
    }
}