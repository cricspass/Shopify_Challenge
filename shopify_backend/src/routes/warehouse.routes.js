const express = require("express");
const router = express.Router();
const warehouse = require("../controllers/warehouse.controller");

//Warehouses or Locations
router.get("/", warehouse.listWarehouses);
router.post("/", warehouse.createWarehouse);
router.post("/:id/assign-inventory", warehouse.assignInventory);

module.exports = router;
