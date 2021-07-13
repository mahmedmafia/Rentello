const mongoose = require("mongoose");
const carRentalSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  from: Date,
  to: Date,
  rentedCar: { type: mongoose.Schema.Types.ObjectId, ref: "Car" },
  renter: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("carRental", carRentalSchema);
