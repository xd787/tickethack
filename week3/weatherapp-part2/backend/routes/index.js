var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

router.get("/weather", (req, res) => {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=2fd26b9f80bb1c6b3ca0ff0da599ef9f")
    .then(response => response.json())
    .then(data => {
      res.json({ weather: data });
    });
});

let weather = [
  { cityName: "London", description: "cloudy", main: "clouds", tempMin: 12.95, tempMax: 17.39 },
  {
    cityName: "Rio de Janeiro",
    main: "clear",
    description: "sunny",
    tempMin: 23.98,
    tempMax: 28.63,
  },
  {
    cityName: "Stockholm",
    description: "sunny",
    main: "clear",
    tempMin: 6.03,
    tempMax: 10.59,
  },
];

router.post("/weather", (req, res) => {
  // Le if sert à vérifier si la ville est déjà dans le tableau ou la BDD
  if (!weather.some(e => e.cityName.toLowerCase() === req.body.cityName.toLowerCase())) {
    // si la ville que l'on recherche n'est pas dans la BDD, fetch dans l'api
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=2fd26b9f80bb1c6b3ca0ff0da599ef9f&units=metric`)
      // ensuite on convertit la réponse que l'on obtient en json
      .then(response => response.json())
      .then(apiData => {
        // on stocke cette réponse json dans la fonction callback
        const newCity = {
          // on crée une variable qui vient stocker les données précises de l'API que l'on souhaite récupérer et afficher sur notre front
          cityName: apiData.name,
          main: apiData.weather[0].main,
          description: apiData.weather[0].description,
          tempMin: apiData.main.temp_Min,
          tempMax: apiData.main.temp_Max,
        };
        weather.push(newCity);
        res.json({ result: true, weather: newCity });
      });
    // on push la variable dans la BDD qui contient toutes les infos
  } else {
    res.json({ result: false, error: "City already saved" });
  }
});

router.get("/weather", (req, res) => {
  res.json({ weather });
});

router.get("/weather/:cityName", (req, res) => {
  const searchedWeather = weather.find(e => e.cityName === req.params.cityName);

  if (searchedWeather) {
    res.json({ result: true, weather: searchedWeather });
  } else {
    res.json({ result: false, error: "City not found" });
  }
});

router.delete("/weather/:cityName", (req, res) => {
  const searchedWeather = weather.find(e => e.cityName === req.params.cityName);

  if (searchedWeather) {
    weather = weather.filter(e => e.cityName !== req.params.cityName);
    res.json({ result: true, weather });
  } else {
    res.json({ result: false, error: "City not found" });
  }
});

module.exports = router;
