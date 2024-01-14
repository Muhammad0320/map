interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
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
    new google.maps.Marker({
      map: this.googleMap,
      position: { ...mappable.location },
    });
  }
}

export default CustomMaps;
