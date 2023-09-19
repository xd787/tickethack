const mongoose = require('mongoose');

const ordersSchema = mongoose.Schema({
  total: Number,
  shippingFees: Number,
  isPaid: Boolean,
  purchaseDate: Date,
});

const Order = mongoose.model("orders", ordersSchema);

module.exports = Order;
