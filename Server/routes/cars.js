const express = require("express");
const router = express.Router();

const carController = require("../controllers/carController");
router.get("/", carController.getCars);
router.post("/", carController.addCar);
router.delete("/delete/:carId", carController.deleteCar);
router.get("/:carId", carController.getCar);
router.patch("/update/:carId", carController.updateCar);
module.exports = router;
