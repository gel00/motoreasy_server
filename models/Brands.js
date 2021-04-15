const mongoose = require("mongoose");

const BrandSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Brand", BrandSchema);
