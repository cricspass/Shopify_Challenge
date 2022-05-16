const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    street:{ type: String, required: true },
    city: { type: String, required: true },
    province: { type: String, required: true },
    country: { type: String, required: true }
});

const warehouse_schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    capacity: { type: Number, required: true },
    capacity_unit: { type: String, required: true },
    longitude: { type: String, required: true },
    latitude: { type: String, required: true },
    address: { type: addressSchema},
});

module.exports = mongoose.model("warehouse", warehouse_schema);