import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMaps";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  infoText() {
    return `User name: ${this.name}`;
  }
}

// AIzaSyDBWdeNbUGBz9T6wfMfpf78yoD-kMas6Icm
