"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    name;
    email;
    password;
    id;
    constructor(name, email, password, id) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id;
    }
}
exports.User = User;
