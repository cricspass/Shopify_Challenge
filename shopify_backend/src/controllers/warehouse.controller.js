const Warehouse = require("../models/warehouse.model");
const Inventory = require("../models/inventory.model");
const api_response = require("../helpers/api-response");
const mongoose = require("mongoose");

// Create and Save Warehouse
exports.createWarehouse = (req, res) => {

    var new_warehouse = new Warehouse({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        capacity: req.body.capacity,
        capacity_unit: req.body.capacity_unit,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        address: {
            city: req.body.city,
            province: req.body.province,
            street: req.body.street,
            country: req.body.country
        },
    });

    new_warehouse
        .save()
        .then(warehouse_data => {
            return api_response.successResponseWithData(res, "Warehouse created successfully", warehouse_data);
        })
        .catch(err => {
            return api_response.errorResponse(res, err);
        });
};

// Assign Inventory
exports.assignInventory = (req, res) => {

    console.log(req.params.id);
    var warehouse_id = req.params.id;
    var inventory_ids = req.body;
    var errors = [];

    Warehouse.findById(warehouse_id, function (err, found_warehouse) {
        //Find Warehouse
        if (found_warehouse === null) {
            return api_response.notFoundResponse(res, "Warehouse doesnt not exist with this id");
        } else {
            var assign_warehouse = {
                warehouse: found_warehouse._id,
            }

            for (const inventory_id in inventory_ids) {
                //Find Inventory to assign
                Inventory.findById(inventory_id, function (err, found_inventory) {
                    if (found_inventory === null) {
                        errors.push("Inventory doesnt not exist with this id" + inventory_id);
                    } else {
                        Inventory.findByIdAndUpdate(inventory_id, assign_warehouse, {}, function (err) {
                            if (err) {
                                errors.push(err);
                            } else {
                                console.log("Inventory assigned successfully.");
                            }
                        });
                    }
                });
            }

            if(errors.length > 0){
                return api_response.errorResponse(res, err);
            }else{
                return api_response.successResponseWithData(res, "Inventory assigned successfully.");
            }

        }
    });

};

//List All Warehouses
exports.listWarehouses = (req, res) => {
    Warehouse.find()
        .then(warehouses => {
            if (warehouses.length > 0) {
                return api_response.successResponseWithData(res, "Warehouses retrieved successfully", warehouses);
            } else {
                return api_response.successResponseWithData(res, "Warehouses retrieved successfully", []);
            }
        })
        .catch(err => {
            return api_response.errorResponse(res, err);
        });
};