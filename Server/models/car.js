const mongoose = require("mongoose");
const carSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  category: String,
  model: String,
  isAvailable: Boolean,
  amount:Number,
  color:String,
  chairsCount:Number,
});
module.exports = mongoose.model("Car", carSchema);
