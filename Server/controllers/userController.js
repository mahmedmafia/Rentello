const User = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.getUsers = (req, res) => {
  User.find()
    .exec()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(409).json(err);
    });
};
exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.find({ email })
    .exec()
    .then((user) => {
      if (user.length ==0) {
          res.status(409).json({ message: "email dosent exsists" });
      } else {
        bcrypt.compare(password, user[0].password, (err, isValid) => {
          
            if (isValid) {
              const token = jwt.sign(
                { email: user[0].email, id: user[0]._id },
                process.env.JWT_KEY,
                { expiresIn: "1h" }
              );
            const newUser=user[0]._doc;
            delete newUser.__v;
              res.status(200).json({
                message: "you are logged in",
                token,
                expiresIn: "3600",
                user:{...newUser},
              });
            }else{
              res
               .status(409)
               .json({ message: "email or password isnt valid" });
            }
          
        });
      }
    })
    .catch((err) => {
      res.status(409).send({message:err});
    });
};
exports.signup = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.find({ email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({ message: "this Email already exsists" });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hashed) => {
          if (err) {
            return res.status(409).json({ message: "error hashing", err });
          } else {
            const user = new User({
              _id: mongoose.Types.ObjectId(),
              email,
              password: hashed,
              first_name: req.body.first_name || '',
              last_name: req.body.last_name || '',
            });
            user
              .save()
              .then((createdUser) => {
                res.status(200).json({
                  message: "Account Created Successfully",
                  createdUser,
                });
              })
              .catch((err) => {
                res
                  .status(409)
                  .json({ message: "creating account failed", err });
              });
          }
        });
      }
    });
};
