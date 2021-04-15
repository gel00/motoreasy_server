const express = require("express");
const Brand = require("../models/Brands");
const router = express.Router();
//get all brands
router.get("/", async (req, res) => {
  try {
    const brands = await Brand.find();
    res.status(200).json(brands);
  } catch (err) {
    res.json({ message: err });
  }
});

//get brand by ID
router.get("/:brandId", async (req, res) => {
  try {
    const brandId = req.params.brandId;
    const brand = await Brand.findById(brandId);
    res.status(200).json(brand);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

//create a brand
router.post("/", async (req, res) => {
  const brand = new Brand({
    title: req.body.title,
    logo: req.body.logo,
  });
  try {
    const savedBrand = await brand.save();
    res.status(200).json(savedBrand);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

//update a band
router.patch("/:brandId", async (req, res) => {
  try {
    const brandId = req.params.brandId;
    const brand = await Brand.updateOne(
      { _id: brandId },
      {
        $set: {
          title: req.body.title,
          logo: req.body.logo,
        },
      }
    );
    res.status(200).json(brand);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

//delete brand by ID
router.delete("/:brandId", async (req, res) => {
  try {
    const brandId = req.params.brandId;
    const brand = await Brand.deleteOne({ _id: brandId });
    res.status(200).json(brand);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
