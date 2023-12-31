import { Bike } from "./bike";
import { Crypt } from "./crypt";
import { Location } from "./location";
import { Rent } from "./rent";
import { User } from "./user";
import * as crypto from "crypto";

export class App {
  users: User[] = [];
  bikes: Bike[] = [];
  rents: Rent[] = [];
  crypt: Crypt = new Crypt();

  findUser(email: string): User | null {
    return this.users.find((user) => user.email === email) || null;
  }

  async registerUser(user: User): Promise<string> {
    for (const rUser of this.users) {
      if (rUser.email === user.email) {
        throw new Error("Duplicate user.");
      }
    }

    try {
      const newId = crypto.randomUUID();
      user.id = newId;
      const encryptedPassword = await this.crypt.encrypt(user.password);

      this.users.push({
        id: user.id,
        name: user.name,
        email: user.email,
        password: encryptedPassword,
      });
      return newId;
    } catch (e) {
      return e as string;
    }
  }

  async authenticate(userEmail: string, password: string): Promise<boolean> {
    const user = this.findUser(userEmail);
    console.log(user)
    if (!user) throw new Error("User not found.");
    console.log("User authenticated successfully.");
    return await this.crypt.compare(password, user.password);
  }

  registerBike(bike: Bike): string {
    const newId = crypto.randomUUID();
    bike.id = newId;
    this.bikes.push({...bike, id: newId});
    return newId;
  }

  findBike(id: string): Bike | null {
    return this.bikes.find((bike) => bike.id === id) || null;
  }

  removeUser(email: string): void {
    const userIndex = this.users.findIndex((user) => user.email === email);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      return;
    }
    throw new Error("User does not exist.");
  }

  rentBike(bikeId: string, userEmail: string): void {
    const bike = this.bikes.find((bike) => bike.id === bikeId);
    if (!bike) {
      throw new Error("Bike not found.");
    }
    if (!bike.available) {
      throw new Error("Unavailable bike.");
    }
    const user = this.findUser(userEmail);
    if (!user) {
      throw new Error("User not found.");
    }
    bike.available = false;
    const newRent = new Rent(bike, user, new Date());
    this.rents.push(newRent);
  }

  returnBike(bikeId: string, userEmail: string): number {
    const now = new Date();
    const rent = this.rents.find(
      (rent) =>
        rent.bike.id === bikeId && rent.user.email === userEmail && !rent.end
    );

    if (!rent) throw new Error("Rent not found.");
    rent.end = now;
    rent.bike.available = true;
    const hours = diffHours(rent.end, rent.start);
    return hours * rent.bike.rate;
  }

  listUsers(): User[] {
    return this.users;
  }

  listBikes(): Bike[] {
    return this.bikes;
  }

  listRents(): Rent[] {
    return this.rents;
  }

  moveBikeTo(bikeId: string, location: Location): void {
    const bike = this.bikes.find((bike) => bike.id === bikeId);
    if (!bike) throw new Error("Bike not found.");
    bike.position.latitude = location.latitude;
    bike.position.longitude = location.longitude;
  }
}

function diffHours(dt2: Date, dt1: Date) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60;
  return Math.abs(diff);
}
