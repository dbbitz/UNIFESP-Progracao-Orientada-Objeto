
import { User } from "./user"
import { Location } from "./location"
import { App } from "./app";
import { Bike } from "./bike";

describe("App", () => {
    it("should register a user", async () => {
        const app = new App();
        const user = new User("jose", "jose@gmail.com", "password123");
        await app.registerUser(user);
        await expect(app.users.length).toEqual(1);
    });

    it("should move bike to location", async () => {
        const app = new App();
        const user = new User("jose", "jose@gmail.com", "password123");
        const bike = new Bike('caloi mountainbike', 'mountain bike',
            1234, 1234, 100.0, 'My bike', 5, [])

        await app.registerUser(user);
        const bikeRegiteredId = app.registerBike(bike);

        const location = new Location(1234,1234);
        
        app.moveBikeTo(bikeRegiteredId,location);

        expect(app.bikes[0].position).rejects.toEqual(location);

    });

});
