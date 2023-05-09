const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    title: { type: String },
    description: { type: String },
    images: [],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", Product);
