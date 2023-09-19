var express = require("express");
var router = express.Router();
require("../models/connection");
const Trip = require("../models/trips");

// fonction test
router.get("/trips", (req, res) => {
  Trip.find().then(data => {
    res.json({ allTrips: data });
  });
});

// let trips = [
//   { departure: "Paris", arrival: "Lyon" },
//   { departure: "Lyon", arrival: "Marseille" },
// ];

router.post("/trips", (req, res) => {
  const newTrip = new Trip({ departure: req.body.departure, arrival: req.body.arrival });
  newTrip.save().then(() =>
    Trip.find().then(data => {
      console.log(data);
    })
  );
  Trip.find().then(data => {
    res.json({ allTrips: data });
  });
});

router.get("/trips", (req, res) => {
  Trip.find().then(data => {
    res.json({ allTrips: data });
  });
});

router.get("/lastTrip", (req, res) => {
  Trip.find().then(data => res.json({ lastTrip: data[data.length - 1] }));
});

router.delete("/trips", (req, res) => {
  Trip.deleteMany().then(() => {
    Trip.find().then(data => {
      res.json({ allTrips: data });
    });
  });
});

module.exports = router;
