import { Bike } from "./bike";
import { User } from "./user";

export class Rent {
  public constructor(
    public bike: Bike,
    public user: User,
    public dateFrom: Date,
    public dateTo: Date,
    public dateReturned?: Date
  ) {}

  static canRent(rents: Rent[], startDate: Date, endDate: Date): boolean {
    for (const rent of rents) {
      if (startDate <= rent.dateTo && endDate >= rent.dateFrom) {
        return false;
      }
    }
    return true;
  }
}
