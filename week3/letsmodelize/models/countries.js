// // Insert your code here
// name
// flagImg
// currency
// population (populationNbr et year)// Insert your code here

const mongoose = require("mongoose");

const populationSchema = mongoose.Schema({
  populationNbr: Number,
  year: Date,
});

const countriesSchema = mongoose.Schema({
  name: String,
  flagImg: String,
  currency: String,
  population: [populationSchema], //comment
});

const country = mongoose.model("country", countriesSchema);

module.exports = country;
