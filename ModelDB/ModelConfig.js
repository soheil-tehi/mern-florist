const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plantsSchema = new Schema({
  name: { type: String, required: true },
  mainTitle: { type: String, required: true },
  getPlantTitle: { type: String },
  getPlantDesc: { type: String },
  titles: [String],
  descs: [String],
  price: { type: Number, required: true },
  images: [String],
  class: { type: String, required: true },
  count: { type: Number, required: true },
});

const plantsData = mongoose.model("plants", plantsSchema);

module.exports = plantsData;
