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

// covid-19 stats

const totalCases = document.querySelector(".report__numbers_total");

const recoveredCases = document.querySelector(".report__numbers_recovered");

const deaths = document.querySelector(".report__numbers_death");

const getTotalCases = () => {
  fetch("https://disease.sh/v3/covid-19/countries/Germany?strict=true")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //console.log(data);
      totalCases.textContent = data.cases;
      recoveredCases.textContent = data.recovered;
      deaths.textContent = data.deaths;
    })
    .catch((err) => {
      console.log("Error, Request failed");
    });
};

getTotalCases();

//  News section

const newsTemplate = document
  .querySelector(".news-template")
  .content.querySelector(".last-news__news-box");

const apiKey = "6a3a2f477c6343f18ce96d78fc1effc2";

const getNewsStories = () => {
  fetch("https://newsapi.org/v2/everything?q=covid", {
    headers: {
      authorization: apiKey,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      data.articles.forEach((item) => {
        // creates news card
        const createNewsCard = (item) => {
          const newsCard = newsTemplate.cloneNode(true);

          const newsSource = newsCard.querySelector(".last-news__source-title");

          const newsTitle = newsCard.querySelector(".last-news__news-title");

          const newsDescription = newsCard.querySelector(
            ".last-news__news-paragraph"
          );

          const publicationDate = newsCard.querySelector(
            ".last-news__publication"
          );

          const additonalLink = newsCard.querySelector(".last-news__read-more");

          newsTitle.textContent = item.title;

          return newsCard;
        };
      });
    })
    .catch((err) => {
      console.log("Error, Articles not found");
    });
};

getNewsStories();
