var express = require("express");
var router = express.Router();

let trips = [
  { departure: "Paris", arrival: "Lyon" },
  { departure: "Lyon", arrival: "Marseille" },
];

let newTrip = { departure: String, arrival: String };

router.post("/trips", (req, res) => {
  let newTrip = { departure: req.body.departure, arrival: req.body.arrival };
  trips.push(newTrip);
  res.json({ allTrips: trips });
});
// POST /trips - Sample result:

// "allTrips": [
//   {
//     "departure": "Paris",
//     "arrival": "Lyon"
//   },
//   {
//     "departure": "Lyon",
//     "arrival": "Marseille"
//   },
//   {
//     "departure": "Grenoble",
//     "arrival": "Strasbourg"
//   }
// ]

router.get("/trips", (req, res) => {
  res.json({ allTrips: trips });
});
// GET /trips - Sample result:
// "allTrips": [
//   {
//     "departure": "Paris",
//     "arrival": "Lyon"
//   },
//   {
//     "departure": "Lyon",
//     "arrival": "Marseille"
//   },
//   {
//     "departure": "Grenoble",
//     "arrival": "Strasbourg"
//   }
// ]

router.get("/lasttrip", (req, res) => {
  const lastTrip = trips[trips.length - 1];
  res.json({ lastTrip });
});

// GET /lastTrip - Sample result:
// "lastTrip": {
//   "departure": "Grenoble",
//   "arrival": "Strasbourg"
// }

router.delete("/trips", (req, res) => {
  trips = [];
  res.json({ allTrips: trips });
});
// DELETE /trips - Sample result:
// "allTrips": []

module.exports = router;
