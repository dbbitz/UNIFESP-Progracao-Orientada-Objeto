import { Bike } from "./bike";
import { Client } from "./client";

export class Reserve {
    start_date: Date;
    end_date: Date;
    client: Client;
    bike: Bike;

    constructor(start_date: Date, end_date: Date, client: Client, bike: Bike) {
        this.start_date = start_date;
        this.end_date = end_date;
        this.client = client;
        this.bike = bike;
    }

}