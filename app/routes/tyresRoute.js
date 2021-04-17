const express = require("express");
const router = express.Router();
const tyreController = require("../controllers/tyresController");

//get all tyres
router.get("/", tyreController.getAll);

//get tyre by ID
router.get("/:tyreId", tyreController.getById);

//create a tyre
router.post("/", tyreController.create);

//update a band
router.patch("/:tyreId", tyreController.updateById);

//delete tyre by ID
router.delete("/:tyreId", tyreController.deleteById);

module.exports = router;
