import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMaps";

export class Company implements Mappable {
  name: string;
  catchPhrase: string;

  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();

    this.catchPhrase = faker.company.catchPhrase();

    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  infoText() {
    return `<div>  <h1> ${this.name} </h1> <h3> ${this.catchPhrase} </h3> </div>`;
  }
}
