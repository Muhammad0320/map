import { User } from "./User";
// import { Company } from "./Company";

const mapEl: HTMLElement = document.getElementById("map")!;

// const user = new User();

// const company = new Company();

// console.log(user, company);

// console.log("shot");

new google.maps.Map(mapEl, {
  zoom: 1,
  center: { lat: 0, lng: 0 },
});

/// <reference types="@types/google.maps" />
