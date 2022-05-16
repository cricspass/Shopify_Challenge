const mongoose = require("mongoose");

const inventory_schema = new mongoose.Schema({
  item_name: { type: String, required: true },
  item_number: { type: String, required: true },
  inventory_recieved: { type: Number, required: true },
  inventory_in_stock: { type: Number, required: true },
  inventory_shipped: { type: Number, required: true },
  warehouse: {type: mongoose.Schema.Types.ObjectId, ref: 'warehouse'},
  _id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("inventory", inventory_schema);