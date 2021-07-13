const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const checkAuth = require("../middleware/check-auth");
const userController = require("../controllers/userController");
router.get("/",  userController.getUsers);
router.post("/login", userController.login);
router.post("/signup", userController.signup);
module.exports = router;
