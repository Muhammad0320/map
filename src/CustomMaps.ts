export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  infoText(): string;
}

class CustomMaps {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: { lat: 0, lng: 0 },
      }
    );
  }

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { ...mappable.location },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.infoText(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}

export default CustomMaps;
