const express = require("express");
const router = express.Router();
const brandController = require("../controllers/brandsController");

//get all brands
router.get("/", brandController.getAll);

//get brand by ID
router.get("/:brandId", brandController.getById);

//create a brand
router.post("/", brandController.create);

//update a band
router.patch("/:brandId", brandController.updateById);

//delete brand by ID
router.delete("/:brandId", brandController.deleteById);

module.exports = router;
