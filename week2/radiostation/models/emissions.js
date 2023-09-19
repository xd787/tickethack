// Insert your code here

const mongoose = require("mongoose");

const emissionsSchema = mongoose.Schema({
  discontinued: Boolean,
  mainAnimator: String,
  name: String,
  nbAnimators: Number,
});

const Emission = mongoose.model("emissions", emissionsSchema);

module.exports = Emission;
