var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const OWM_API_KEY = "2fd26b9f80bb1c6b3ca0ff0da599ef9f";

const City = require("../models/cities");

// router.post("/" (req, res) => {
//     //faire un findOne pour trouver dans la bdd
//     City.findOne({cityName: req.body.cityName}).then(data =>
//         if (data){

//         }else {

//         })

// }
// )

router.post("/", (req, res) => {
  //faire un findOne pour trouver dans la bdd
  City.findOne({ cityName: new RegExp(req.body.cityName, "i") }).then(data => {
    // si c'est déjà dans la base de données, le résultat est faux avec comme erreur la ville est sauvegardé
    if (data === null) {
      res.json({ result: false, error: "City already saved" });
    } else {
      // pas dans la base de données, donc j'appelle mon api
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=${OWM_API_KEY}&units=metric`)
        .then(response => response.json())
        .then(apiData => {
          // je crée une variable avec une nouvelle ville et les paramètres nécessaires nouvelle ville à créer
          const newCity = new City({
            cityName: apiData.name,
            main: apiData.weather[0].main,
            description: apiData.weather[0].description,
            tempMin: apiData.main.temp_min,
            tempMax: apiData.main.temp_max,
          });
          // je sauvegarde la nouvelle ville dans la bdd
          newCity
            .save()
            // je retourne en format json
            .then(() => res.json({ result: true, City: newCity }));
        });
    }
  });
});

// router.post("/weather", (req, res) => {
//     const newCity1 = req.body.cityName
//   if (!weather.some(e => e.cityName.toLowerCase() === req.body.cityName.toLowerCase())) {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=${OWM_API_KEY}&units=metric`)
//       .then(response => response.json())
//       .then(apiData => {
//         const newCity = {
//           cityName: apiData.name,
//           main: apiData.weather[0].main,
//           description: apiData.weather[0].description,
//           tempMin: apiData.main.temp_min,
//           tempMax: apiData.main.temp_max,
//         };
//         // weather.push(newCity);

//         res.json({ result: true, weather: newCity });
//       });
//   } else {
//     res.json({ result: false, error: "City already saved" });
//   }
// });

router.get("/", (req, res) => {
  City.find().then(data => res.json({ weather: data }));
});

router.get("/:cityName", (req, res) => {
  // le "i" signifie insensible à la casse dans ma recherche dans la BDD, utile sur le regexp
  City.findOne({ cityName: new RegExp(req.params.cityName, "i") }).then(searchedWeather => {
    if (searchedWeather) {
      res.json({ result: true, City: searchedWeather });
    } else {
      res.json({ result: false, City: "City not found" });
    }
  });
});

// router.get("/:cityName", (req, res) => {
//   const searchedWeather = weather.find(e => e.cityName.toLowerCase() === req.params.cityName.toLowerCase());
//   if (searchedWeather) {
//     res.json({ result: true, weather: searchedWeather });
//   } else {
//     res.json({ result: false, error: "City not found" });
//   }
// });

router.delete("/:cityName", (req, res) => {
  City.deleteOne({ cityName: new RegExp(req.params.cityName, "i") }).then(deletedDoc => {
    if (deleteCity.deletedCount > 0) {
      // document successfully deleted
      City.find().then(data => {
        res.json({ result: true, City: data });
      });
    } else {
      res.json({ result: false, City: "City not found" });
    }
  });
});
//   City.findOne({ cityName: new RegExp(req.params.cityName, "i") }).then(deleteCity => {
//     if (deleteCity) {
//       City.deleteOne(deleteCity).then(()=> City.find().then();)
//     } else {
//         res.json({ result: false, City: "City not found" });

//   const searchedWeather = weather.find(e => e.cityName.toLowerCase() === req.params.cityName.toLowerCase());
//   if (searchedWeather) {
//     weather = weather.filter(e => e.cityName.toLowerCase() !== req.params.cityName.toLowerCase());
//     res.json({ result: true, weather });
//   } else {
//     res.json({ result: false, error: "City not found" });
//   }
// });

module.exports = router;
