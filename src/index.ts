import { App } from "./app";
import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import * as sinon from 'sinon'

async function main() {
    const clock = sinon.useFakeTimers();
    const app = new App()
    const user1 = new User('Dan', 'daniel@gmail.com', '123456')

    await app.registerUser(user1)
    const bike = new Bike('caloi mountainbike', 'mountain bike',
        1234, 1234, 100.0, 'My bike', 5, [])

    if(!bike.id || !bike) {
        throw new Error('Bike not found.')
    }
    app.registerBike(bike)
    console.log('Bike disponível: ', bike.available)
    app.rentBike(bike.id, user1.email)
    console.log('Bike disponível: ', bike.available)
    clock.tick(1000 * 60 * 65)
    console.log(app.returnBike(bike.id, user1.email))
    console.log('Bike disponível: ', bike.available)
    
}

main()