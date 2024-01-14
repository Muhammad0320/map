// import { User } from "./User";
// import { Company } from "./Company";

// import "googlemaps";

const mapEl: HTMLElement = document.getElementById("map")!;

new google.maps.Map(mapEl, {
  zoom: 1,
  center: { lat: 0, lng: 0 },
});

/// <reference types="@types/google.maps" />
