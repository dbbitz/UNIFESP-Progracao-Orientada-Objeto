import { Client } from "./client"
import { Bike } from "./bike"
import { Store } from "./store"

const bike1 = new Bike(1, "Caloi", false, null);
const bike2 = new Bike(2, "Monark", false, null);

const client1 = new Client(1, "João", "123.456.789-00", null);
const client2 = new Client(2, "Maria", "987.654.321-00", null);

const store = new Store();

store.addBike(bike1);
store.addBike(bike2);
store.addClient(client1);
store.addClient(client2);

store.rentABike(client1, bike1, new Date(2021, 8, 1), new Date(2021, 8, 2));


store.showBikes();
store.showClients();
store.showReserves();


