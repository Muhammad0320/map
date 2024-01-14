/// <reference types="@types/google.maps" />

import CustomMaps from "./CustomMaps";
import { User } from "./User";
import { Company } from "./Company";

const user = new User();

const company = new Company();

window.onload = function () {
  const map = new CustomMaps("map");

  map.addMarker(user);

  map.addMarker(company);
};
