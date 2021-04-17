const Brand = require("../models/Brands");

class BrandsController {
  async getAll(req, res) {
    try {
      const brands = await Brand.find();
      res.status(200).json(brands);
    } catch (err) {
      res.json({ message: err });
    }
  }
  async getById(req, res) {
    try {
      const brandId = req.params.brandId;
      const brand = await Brand.findById(brandId);
      res.status(200).json(brand);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
  async create(req, res) {
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
  }
  async updateById(req, res) {
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
  }
  async deleteById(req, res) {
    try {
      const brandId = req.params.brandId;
      const brand = await Brand.deleteOne({ _id: brandId });
      res.status(200).json(brand);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
}

module.exports = new BrandsController();
