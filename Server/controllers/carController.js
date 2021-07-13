const Car = require("../models/car");
const mongoose=require("mongoose");
exports.getCars = (req, res) => {
  Car.find()
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      res.status(500).json({ message: "getting cars failed", err });
    });
};
exports.addCar = (req, res) => {
  const car = new Car({
    _id: mongoose.Types.ObjectId(),
    category: req.body.category,
    model: req.body.model,
    isAvailable: req.body.isAvailable,
    amount: req.body.amount,
    color: req.body.color,
    chairsCount: req.body.chairsCount,
  });
  car
    .save()
    .then((createdCar) => {
      res.status(200).json({ message: "Car Created", createdCar });
    })
    .catch((err) => {
      res.status(500).json({ message: "adding Car Failed", err });
    });
};
exports.deleteCar = (req, res) => {
  Car.findByIdAndDelete(req.params.carId)
    .exec()
    .then((result) => {
      if (result == null) {
        throw "no Car Found To Be Deleted";
      }
      res.status(200).json({ message: "Car Deleted Successfully", result });
    })
    .catch((err) => {
      res.status(500).json({ message: "deleting car failed ", err });
    });
};
exports.getCar = (req, res) => {
  Car.findById({ _id: req.params.carId })
    .exec()
    .then((result) => {
      res.status(200).json({ message: "Car found Successfully", result });
    })
    .catch((err) => {
      res.status(500).json({ message: "getting car failed ", err });
    });
};
exports.updateCar = (req, res) => {
  Car.findByIdAndUpdate({ _id: req.params.carId }, req.body)
    .exec()
    .then((result) => {
      res.status(200).json({ message: "Car updated Successfully", result });
    })
    .catch((err) => {
      res.status(500).json({ message: "updating car failed ", err });
    });
};
