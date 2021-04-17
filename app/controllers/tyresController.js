const Tyre = require("../models/Tyres");

class TyresController {
  async getAll(req, res) {
    try {
      const tyres = await Tyre.find().populate("brand");
      res.status(200).json(tyres);
    } catch (err) {
      res.json({ message: err });
    }
  }
  async getById(req, res) {
    try {
      const tyreId = req.params.tyreId;
      const tyre = await Tyre.findById(tyreId).populate("brand");
      res.status(200).json(tyre);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
  async create(req, res) {
    const { title, size, price, image, brand } = req.body;
    const tyre = new Tyre({
      title: title,
      size: size,
      price: price,
      image: image,
      brand: brand,
    });
    try {
      const savedTyre = await tyre.save();
      res.status(200).json(savedTyre);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
  async updateById(req, res) {
    try {
      const tyreId = req.params.tyreId;
      const tyre = await Tyre.updateOne(
        { _id: tyreId },
        {
          $set: req.body,
        }
      );
      res.status(200).json(tyre);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
  async deleteById(req, res) {
    try {
      const tyreId = req.params.tyreId;
      const tyre = await Tyre.deleteOne({ _id: tyreId });
      res.status(200).json(tyre);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
}

module.exports = new TyresController();
