"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
class Bike {
    id;
    model;
    leased;
    client;
    constructor(id, model, leased, client) {
        this.id = id;
        this.model = model;
        this.leased = leased;
        this.client = client;
    }
}
exports.Bike = Bike;
