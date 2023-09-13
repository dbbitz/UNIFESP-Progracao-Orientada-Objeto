"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rent = void 0;
class Rent {
    bike;
    user;
    dateFrom;
    dateTo;
    dateReturned;
    constructor(bike, user, dateFrom, dateTo, dateReturned) {
        this.bike = bike;
        this.user = user;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.dateReturned = dateReturned;
    }
    static canRent(rents, startDate, endDate) {
        for (const rent of rents) {
            if (startDate <= rent.dateTo && endDate >= rent.dateFrom) {
                return false;
            }
        }
        return true;
    }
}
exports.Rent = Rent;
