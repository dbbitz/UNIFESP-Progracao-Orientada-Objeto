import { App } from "./app";
import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import * as sinon from "sinon";

async function main() {
  const clock = sinon.useFakeTimers();
  const app = new App();
  const user1 = new User("Dan", "daniel@gmail.com", "123456");
  const bike = new Bike("caloi mountainbike","mountain bike",1234,1234,100.0,"My bike",5,[]);

  try {
    await app.registerUser(user1);
    app.registerBike(bike);
    const autenticate = await app.authenticate(user1.email, user1.password);
  
    
  } catch (error) {
    
  }
 
}

main();
