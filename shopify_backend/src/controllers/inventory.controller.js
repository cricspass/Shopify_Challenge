const Inventory = require("../models/inventory.model");
const api_response = require("../helpers/api-response");
const mongoose = require("mongoose");

// Create and Save a new Inventory item
exports.storeInventory = (req, res) => {

    // Create Inventory
    var new_inventory = new Inventory({
        _id: new mongoose.Types.ObjectId(),
        item_name: req.body.item_name,
        item_number: req.body.item_number,
        inventory_recieved: req.body.inventory_recieved,
        inventory_in_stock: req.body.inventory_in_stock,
        inventory_shipped: req.body.inventory_shipped,
    });

    // Save Inventory in the database
    new_inventory
        .save()
        .then(item_data => {
            return api_response.successResponseWithData(res, "Item added successfully", item_data);
        })
        .catch(err => {
            return api_response.errorResponse(res, err);
        });
};

// Update Inventory
exports.updateInventory = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    var inventory_id = req.params.id;
    var update_inventory = new Inventory({
        item_name: req.body.item_name,
        item_number: req.body.item_number,
        inventory_recieved: req.body.inventory_recieved,
        inventory_in_stock: req.body.inventory_in_stock,
        inventory_shipped: req.body.inventory_shipped,
    });

    Inventory.findById(inventory_id, function (err, found_inventory) {
        if (found_inventory === null) {
            return api_response.notFoundResponse(res, "Inventory doesnt not exist with this id");
        } else {
            Inventory.findByIdAndUpdate(req.params.id, update_inventory, {}, function (err) {
                if (err) {
                    return api_response.errorResponse(res, err);
                } else {
                    return api_response.successResponseWithData(res, "Inventory updated successfully.", update_inventory);
                }
            });
        }
    });
};

//List All Inventory
exports.listInventory = (req, res) => {
    Inventory.find().populate('warehouse')
        .then(inventories => {
            if (inventories.length > 0) {
                return api_response.successResponseWithData(res, "Inventories retrieved successfully", inventories);
            } else {
                return api_response.successResponseWithData(res, "Inventories retrieved successfully", []);
            }
        })
        .catch(err => {
            return api_response.errorResponse(res, err);
        });
};

//Find a single Inventory using Id
exports.findInventory = (req, res) => {
    const inventory_id = req.params.id;
    Inventory.findOne({ _id: inventory_id}).populate('warehouse')
    .then(inventory => {
            return api_response.successResponseWithData(res, "Inventories retrieved successfully", inventory);
    })
    .catch(err => {
        return api_response.errorResponse(res, err);
    });
};

//Delete a Inventory Item
exports.deleteInventory = (req, res) => {
    const inventory_id = req.params.id;

    Inventory.findById(inventory_id, function (err, found_inventory) {
        if (found_inventory === null) {
            return api_response.notFoundResponse(res, "Inventory does not exist with this id" + inventory_id);
        } else {
            Inventory.findByIdAndRemove(inventory_id, function (err) {
                if (err) {
                    return api_response.errorResponse(res, err);
                } else {
                    return api_response.successResponse(res, "Inventory deleted successfully.");
                }
            })
        }
    });
};