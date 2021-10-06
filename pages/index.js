// Add map to the page using leaflet.js library
const mapView = L.map("map").setView([51.505, -0.09], 13);

// Addd tilelayer to render map
L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=6i9MWb82RZ3b4ah47Bs2",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(mapView);
