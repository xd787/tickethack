const mongoose = require("mongoose");

const articlesSchema = mongoose.Schema({
  0: String,
  1: String,
});

const orderSchema = mongoose.Schema({
  total: Number,
  shippingFees: Number,
  purchaseDate: Date,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  isPaid: Boolean,
  articles: [articlesSchema],
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
