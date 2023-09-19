const mongoose = require("mongoose");

const tripsSchema = mongoose.Schema({
  arrival: String,
  departure: String,
});

const trip = mongoose.model("trips", tripsSchema);

module.exports = trip;
