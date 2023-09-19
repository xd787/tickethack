// name
// currentPopulation
// country

const mongoose = require("mongoose");

const citiesSchema = mongoose.Schema({
  name: String,
  currentPopulation: Number,
  country: { type: mongoose.Schema.Types.ObjectId, ref: "countries" },
});

const cities = mongoose.model("cities", citiesSchema);

module.exports = cities;
