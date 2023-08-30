import { App } from "./app";
import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";

const today = new Date();
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const twoDaysFromNow = new Date()
twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 2)
const threeDaysFromNow = new Date()
threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3)

const bike = new Bike(
    "Bike 1",
    "Mountain",
    20,
    100,
    10,
    "Bike 1 description",
    4,
    ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.virtualbike.com.br%2Fbicicleta-xks-aro-29-freio-disco-21-marchas.html&psig=AOvVaw28cen-jhvPdxExO0MaDkH0&ust=1693524803773000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKi1ktXFhYEDFQAAAAAdAAAAABAD"],
    "bike-1"
    );

const user = new User("Dan", "daniel@gmail.com", "123456");
const rent = Rent.create([], bike, user, today, tomorrow);

const app = new App();
app.registerUser(user);
app.registerBike(bike);
app.rentBike(bike.id ? bike.id : '', user.email, today, tomorrow);
app.returnBike(bike.id ? bike.id : '', user.email, threeDaysFromNow);
app.show();


