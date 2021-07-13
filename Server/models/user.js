const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  first_name: { type: String},
  last_name: { type: String },
  isAdmin: {type:Boolean,default:false},
  favTypeOfCar: String,
  bookMarkedCars: [{ type: mongoose.Schema.Types.ObjectId, ref: "Car" }],
});
module.exports = mongoose.model("User", userSchema);
