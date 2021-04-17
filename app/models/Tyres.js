const mongoose = require("mongoose");

const TyreSchema = mongoose.Schema({
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
  },
  title: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Tyre", TyreSchema);
