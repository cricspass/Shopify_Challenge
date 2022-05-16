const express = require("express");
const router = express.Router();
const inventory = require("../controllers/inventory.controller");

//Inventory
router.get("/", inventory.listInventory);
router.get("/:id", inventory.findInventory);
router.post("/", inventory.storeInventory);
router.put("/:id", inventory.updateInventory);
router.delete("/:id", inventory.deleteInventory);

module.exports = router;