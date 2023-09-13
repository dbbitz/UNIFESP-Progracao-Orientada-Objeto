import { Bike } from "./bike";
import { Crypt } from "./crypt";
import { Rent } from "./rent";
import { User } from "./user";
import * as crypto from "crypto";

export class App {
  users: User[] = [];
  bikes: Bike[] = [];
  rents: Rent[] = [];

  findUser(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  findBike(id: string): Bike | undefined {
    return this.bikes.find((bike) => bike.id === id);
  }

  registerBike(bike: Bike): void {
    for (const rBike of this.bikes) {
      if (rBike.name === bike.name) {
        throw new Error("Duplicate bike.");
      }
    }
    bike.id = crypto.randomUUID();
    this.bikes.push(bike);
  }

  async registerUser(user: User): Promise<void> {
    for (const rUser of this.users) {
      if (rUser.email === user.email) {
        throw new Error("Duplicate user.");
      }
    }
    const { email, password } = user;
    user.id = crypto.randomUUID();
    user.email = email;
    user.password = await new Crypt(password).encrypt();
    this.users.push(user);
  }

  removeUser(userId: string) {
    const newUsers = this.users.filter((user) => user.id !== userId);
    this.users = newUsers;
  }

  rentBike(bikeId: string, userEmail: string, startDate: Date, endDate: Date) {
    const bike = this.findBike(bikeId);
    const user = this.findUser(userEmail);
    if (!bike) throw new Error("Bike not found.");

    if (!user) throw new Error("User not found.");

    const rent = new Rent(bike, user, startDate, endDate);
    this.rents.push(rent);
    console.log("Rent created successfully.");
    console.log(rent);
  }

  returnBike(bikeId: string, userEmail: string, dateReturned: Date) {
    const bike = this.findBike(bikeId);
    const user = this.findUser(userEmail);
    if (!bike) throw new Error("Bike not found.");
    if (!user) throw new Error("User not found.");
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
