var express = require("express");
var router = express.Router();

let weather = [
  { cityName: "London", description: "cloudy", tempMin: 12.95, tempMax: 17.39 },
  { cityName: "Rio de Janeiro", description: "sunny", tempMin: 23.98, tempMax: 28.63 },
  { cityName: "Stockholm", description: "sunny", tempMin: 6.03, tempMax: 10.59 },
];

router.post("/weather", (req, res) => {
  let newCity = { cityName: req.body.cityName, description: req.body.description, tempMin: req.body.tempMin, tempMax: req.body.tempMax };
  let existingCity = weather.find(city => city.cityName.toLowerCase() === newCity.cityName.toLowerCase());

  if (existingCity) {
    res.json({ result: false, error: "City already saved" });
  } else {
    weather.push(newCity);
    res.json({ result: true, weather: newCity });
  }
});
// POST /weather - Sample result:
/*{
  "result": true,
  "weather": {
    "cityName": "Lille",
    "description": "sunny",
    "tempMin": "15.2",
    "tempMax": "22.7"
  }
} 
OR
{
  "result": false,
  "error": "City already saved"
}
*/
router.get("/weather", (req, res) => {
  res.json({ weather });
});
// GET /weather - Sample result:
/*{
  "weather": [
    {
      "city": "London",
      "description": "cloudy",
      "tempMin": 12.95,
      "tempMax": 17.39
    },
    {
      "city": "Rio de Janeiro",
      "description": "sunny",
      "tempMin": 23.98,
      "tempMax": 28.63
    },
    {
      "city": "Stockholm",
      "description": "sunny",
      "tempMin": 6.03,
      "tempMax": 10.59
    }
  ]
} */

router.get("/weather/:cityName", (req, res) => {
  let existingCity = weather.find(city => city.cityName.toLowerCase() === req.params.cityName.toLowerCase());
  if (existingCity) {
    res.json({ result: true, weather: existingCity });
  } else {
    res.json({ result: false, error: "City not found" });
  }
});
// GET /weather/:cityName - Sample result:
/*{
  "result": true,
  "weather": {
    "cityName": "London",
    "description": "cloudy",
    "tempMin": 12.95,
    "tempMax": 17.39
  }
}
OR
{
  "result": false,
  "error": "City not found"
} */

router.delete("/weather/:cityName", (req, res) => {
  let found = weather.find(city => city.cityName.toLowerCase() === req.params.cityName.toLowerCase());
  if (found) {
    weather = weather.filter(city => city.cityName.toLowerCase() !== req.params.cityName.toLowerCase());
    res.json({ result: true, weather: found });
  } else {
    res.json({ result: false, error: "City not found" });
  }
});
// DELETE /weather/:cityName - Sample result:
/*{
  "result": true,
  "weather": [
    {
      "cityName": "Rio de Janeiro",
      "description": "sunny",
      "tempMin": 23.98,
      "tempMax": 28.63
    },
    {
      "cityName": "Stockholm",
      "description": "sunny",
      "tempMin": 6.03,
      "tempMax": 10.59
    }
  ]
}
OR
{
  "result": false,
  "error": "City not found"
} */

module.exports = router;
