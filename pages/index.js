// Add map to the page using leaflet.js library
const mapView = L.map("map").setView([52.52, 13.404], 10);

// Addd tilelayer to render map
L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=6i9MWb82RZ3b4ah47Bs2",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(mapView);

// Array of coordinates
const cityCoordinates = [
  {
    city: "London",
    coordinates: [51.505, -0.09],
  },
  {
    city: "Moscow",
    coordinates: [55.751, 37.618],
  },
  {
    city: "Jerusalem",
    coordinates: [31.771, 35.217],
  },
];

const berlin = document.querySelector(".cities-panel__link_ber");

const moscow = document.querySelector(".cities-panel__link_mscw");

const london = document.querySelector(".cities-panel__link_ldn");

const jerusalem = document.querySelector(".cities-panel__link_js");

const city = document.querySelector(".cities-panel__city");

city.addEventListener("click", () => {
  city.classList.remove("cities-panel__city_active");

  city.classList.add("cities-panel__city_active");
});

// covid-19 stats

const totalCases = document.querySelector(".report__numbers_total");

const recoveredCases = document.querySelector(".report__numbers_recovered");

const deaths = document.querySelector(".report__numbers_death");

const getTotalCasesGermany = () => {
  fetch("https://disease.sh/v3/covid-19/countries/Germany?strict=true")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      var cases = data.cases + "" + "(+" + data.todayCases + ")";
      totalCases.textContent = separator(cases.toString());
      var recoverd = data.recovered + "" + "(+" + data.todayRecovered + ")";
      recoveredCases.textContent = separator(recoverd.toString());
      var death = data.deaths + "" + "(+" + data.todayDeaths + ")";
      deaths.textContent = separator(death.toString());
    })
    .catch((err) => {
      console.log("Error, Request failed");
    });
};
getTotalCasesGermany();

const getTotalCasesRussia = () => {
  fetch("https://disease.sh/v3/covid-19/countries/russia?strict=true")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      var cases = data.cases + "" + "(+" + data.todayCases + ")";
      totalCases.textContent = separator(cases.toString());
      var recoverd = data.recovered + "" + "(+" + data.todayRecovered + ")";
      recoveredCases.textContent = separator(recoverd.toString());
      var death = data.deaths + "" + "(+" + data.todayDeaths + ")";
      deaths.textContent = separator(death.toString());
    })
    .catch((err) => {
      console.log("Error, Request failed");
    });
};

const getTotalCasesBritain = () => {
  fetch("https://disease.sh/v3/covid-19/countries/uk?strict=true")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      var cases = data.cases + "" + "(+" + data.todayCases + ")";
      totalCases.textContent = separator(cases.toString());
      var recoverd = data.recovered + "" + "(+" + data.todayRecovered + ")";
      recoveredCases.textContent = separator(recoverd.toString());
      var death = data.deaths + "" + "(+" + data.todayDeaths + ")";
      deaths.textContent = separator(death.toString());
    })
    .catch((err) => {
      console.log("Error, Request failed");
    });
};

const getTotalCasesIsrael = () => {
  fetch("https://disease.sh/v3/covid-19/countries/israel?strict=true")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      var cases = data.cases + "" + "(+" + data.todayCases + ")";
      totalCases.textContent = separator(cases.toString());
      var recoverd = data.recovered + "" + "(+" + data.todayRecovered + ")";
      recoveredCases.textContent = separator(recoverd.toString());
      var death = data.deaths + "" + "(+" + data.todayDeaths + ")";
      deaths.textContent = separator(death.toString());
    })
    .catch((err) => {
      console.log("Error, Request failed");
    });
};
// event listeners
moscow.addEventListener("click", () => {
  mapView.setView([55.751, 37.618], 10);
  getTotalCasesRussia();
});

berlin.addEventListener("click", () => {
  mapView.setView([52.52, 13.404], 10);
  getTotalCasesGermany();
});

london.addEventListener("click", () => {
  mapView.setView([51.505, -0.09], 10);
  getTotalCasesBritain();
});

jerusalem.addEventListener("click", () => {
  mapView.setView([31.771, 35.217], 10);
  getTotalCasesIsrael();
});

function separator(numb) {
  var str = numb.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return str.join(".");
}

// stat class functions

function totalColor() {
  var total = document.getElementById("total");
  total.classList.toggle("report__color-red");
}

function recoverdColor() {
  var total = document.getElementById("recoverd");
  total.classList.toggle("report__color-green");
}
