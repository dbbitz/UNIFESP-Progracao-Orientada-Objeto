"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
class Store {
    bikes;
    clients;
    constructor(bikes, clients) {
        this.bikes = bikes;
        this.clients = clients;
    }
    addBike(bike) {
        this.bikes.push(bike);
    }
    addClient(client) {
        this.clients.push(client);
    }
    rentABike(client, rentedBike) {
        this.bikes.forEach(bike => {
            if (bike.id == rentedBike.id) {
                bike.leased = true;
                bike.client = client;
            }
        });
        this.clients.forEach(client => {
            if (client.id == client.id) {
                client.rentedBike = rentedBike;
            }
        });
    }
    returnABike(client, returnedBike) {
        this.bikes.forEach(bike => {
            if (bike.id == returnedBike?.id) {
                bike.leased = false;
                bike.client = null;
            }
        });
        this.clients.forEach(client => {
            if (client.id == returnedBike?.client?.id) {
                client.rentedBike = null;
            }
        });
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
}
exports.Store = Store;
