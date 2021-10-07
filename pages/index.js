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

const moscow = document.querySelector(".cities-panel__link_mscw");

const london = document.querySelector(".cities-panel__link_ldn");

const jerusalem = document.querySelector(".cities-panel__link_js");

const city = document.querySelector(".cities-panel__city");

const changeLocation = () => {
  mapView.setView([55.751, 37.618], 10);
};

moscow.addEventListener("click", () => {
  changeLocation();

  city.classList.toggle("cities-panel__city_active");
});

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
      var cases = data.cases + '' + '(+' + data.todayCases + ')';
      totalCases.textContent = separator(cases.toString());
      var recoverd = data.recovered  + '' + '(+' + data.todayRecovered + ')';
      recoveredCases.textContent = separator(recoverd.toString());
      var death = data.deaths  + '' + '(+' + data.todayDeaths + ')';
      deaths.textContent = separator(death.toString());
      console.log(data);
    })
    .catch((err) => {
      console.log("Error, Request failed");
    });
};

function separator(numb) {
  var str = numb.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return str.join(".");
}

getTotalCases();

function totalColor() {
  var total = document.getElementById("total");
  total.classList.toggle('report__color-red'); 
}

function recoverdColor() {
  var total = document.getElementById("recoverd");
  total.classList.toggle('report__color-green'); 
}


//  News section

const newsTemplate = document
  .querySelector("#news-template")
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

          newsSection.appendChild(newsCard);

          return newsCard;
        };
      });
    })
    .catch((err) => {
      console.log("Error, Articles not found");
    });
};

getNewsStories();
