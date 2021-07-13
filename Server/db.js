const mongoose = require("mongoose");
const password = "FRxqicoOHMhFZsS9";
const user = "BsAdmin";
const uri =
  "mongodb+srv://BsAdmin:" +
  password +
  "@cluster0.orjpp.mongodb.net/carRentalDb?retryWrites=true&w=majority";
class DB {
  constructor() {
    mongoose
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log("coonected to data base");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
module.exports = DB;
