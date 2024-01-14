/// <reference types="@types/google.maps" />

const mapEl: HTMLElement = document.getElementById("map")!;

window.onload = function () {
  new google.maps.Map(mapEl, {
    zoom: 1,
    center: { lat: 0, lng: 0 },
  });
};

// new google.maps.Map(mapEl, {
//   zoom: 1,
//   center: { lat: 0, lng: 0 },
// });
