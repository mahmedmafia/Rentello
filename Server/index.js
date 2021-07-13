const express = require("express");
const app = express();
require('dotenv').config()
const port = 8080;
const DB = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const carRoutes = require("./routes/cars");
const userRoutes = require("./routes/user");
const db = new DB();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/cars", carRoutes);
app.use("/auth", userRoutes);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(` app listening on port ${port}!`));
