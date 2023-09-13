"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const rent_1 = require("./rent");
const crypto = require("crypto");
class App {
    users = [];
    bikes = [];
    rents = [];
    findUser(email) {
        return this.users.find((user) => user.email === email);
    }
    findBike(id) {
        return this.bikes.find((bike) => bike.id === id);
    }
    registerBike(bike) {
        for (const rBike of this.bikes) {
            if (rBike.name === bike.name) {
                throw new Error("Duplicate bike.");
            }
        }
        bike.id = crypto.randomUUID();
        this.bikes.push(bike);
    }
    registerUser(user) {
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                throw new Error("Duplicate user.");
            }
        }
        user.id = crypto.randomUUID();
        this.users.push(user);
    }
    removeUser(userId) {
        const newUsers = this.users.filter((user) => user.id !== userId);
        this.users = newUsers;
    }
    rentBike(bikeId, userEmail, startDate, endDate) {
        const bike = this.findBike(bikeId);
        const user = this.findUser(userEmail);
        if (!bike)
            throw new Error("Bike not found.");
        if (!user)
            throw new Error("User not found.");
        const rent = new rent_1.Rent(bike, user, startDate, endDate);
        this.rents.push(rent);
        console.log("Rent created successfully.");
        console.log(rent);
    }
    returnBike(bikeId, userEmail, dateReturned) {
        const bike = this.findBike(bikeId);
        const user = this.findUser(userEmail);
        if (!bike)
            throw new Error("Bike not found.");
        if (!user)
            throw new Error("User not found.");
        this.rents = this.rents.map((rent) => {
            if (rent.bike.id === bikeId && rent.user.email === userEmail) {
                rent.dateReturned = dateReturned;
                console.log(rent.dateFrom);
                console.log(rent.dateReturned);
            }
            return rent;
        });
    }
    showUsers() {
        console.log("Users:");
        console.log(this.users);
    }
    showRentals() {
        console.log("Rents:");
        console.log(this.rents);
    }
    showBikes() {
        console.log("Bikes:");
        console.log(this.bikes);
    }
    show() {
        console.log("Users:");
        console.log(this.users);
        console.log("Bikes:");
        console.log(this.bikes);
        console.log("Rents:");
        console.log(this.rents);
    }
}
exports.App = App;
