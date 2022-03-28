import { MapJawn } from "../MapJawn";

let placesPath: string = process.env.SAVED_PLACES_FOLDER!

let greeter = new MapJawn(placesPath);
console.log(greeter)

