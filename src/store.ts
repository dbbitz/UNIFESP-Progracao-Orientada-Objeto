import { Bike } from "./bike";
import { Client } from "./client";
import { Reserve } from "./reserve";

export class Store {
    bikes: Bike[];
    clients: Client[];
    reserves: Reserve[];

    constructor() {
        this.bikes = [];
        this.clients = [];
        this.reserves = [];
    }

    addBike(bike: Bike) {
        this.bikes.push(bike);
    }
    addClient(client: Client) {
        this.clients.push(client);
    }
    rentABike(client: Client, rentedBike: Bike, start_date: Date, end_date: Date) {

        let res = false;

        this.bikes.forEach(bike => {
            if (bike.id == rentedBike.id || bike.leased == false) {
                bike.leased = true;
                bike.client = client.name;
            }
            else{
                console.log("Bike already rented")
            }
        });

        this.clients.forEach(_client => {
            if (client.id == _client.id) {
                client.rentedBike = rentedBike.model;
            }
        });

        this.reserves.push(new Reserve(start_date, end_date, client, rentedBike));

        res && console.log("Bike rented");
    }
    returnABike(client: Client, returnedBike: Bike | null) {
        let res = false;
        this.bikes.forEach(bike => {
            if (bike.id == returnedBike?.id) {
                bike.leased = false;
                bike.client = 'None';
                res = true;
            }
            else{
                console.log("Bike already returned")
            }
        });

        this.clients.forEach(_client => {
            if (_client.id == client?.id) {
                client.rentedBike = 'None';
            }
        });

        res && console.log("Bike returned");
    }

    showBikes() {
        this.bikes.forEach(bike => {
            console.log(bike);
        });
    }

    showClients() {
        this.clients.forEach(client => {
            console.log(client);
        });
    }

    showReserves() {
        this.reserves.forEach(reserve => {
            console.log(reserve);
        });
    }

}