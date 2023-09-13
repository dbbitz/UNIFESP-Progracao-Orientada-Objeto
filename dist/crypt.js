"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crypt = void 0;
const bcrypt = require("bcrypt");
class Crypt {
    data;
    encrypted;
    constructor(data, encrypted) {
        this.data = data;
        this.encrypted = encrypted;
    }
    encrypt(data) {
        return bcrypt.hash(data, 10);
    }
    decrypt(data, encrypted) {
        return bcrypt.compare(data, encrypted);
    }
}
exports.Crypt = Crypt;
