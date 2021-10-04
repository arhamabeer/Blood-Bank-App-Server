const authModel = require("../models/authSchema");
const bcrypt = require("bcrypt");

const SignUp = async (req, res) => {
  let checkUser = await authModel.findOne({ email: req.body.email });
  //   console.log(checkUser);
  if (checkUser) {
    res
      .status(400)
      .send({ result: checkUser, message: "User already Registered." });
  } else {
    let hash_pass = await bcrypt.hash(req.body.password, 12);

    let create_user = new authModel({
      email: req.body.email,
      password: hash_pass,
    });
    create_user
      .save()
      .then((response) => {
        res
          .status(200)
          .send({ result: response, message: "User Registed Successfully." });
      })
      .catch((err) => {
        res
          .status(400)
          .send({ result: err.message, message: "Can't register user." });
      });
  }
};

const SignIn = async (req, res) => {
  var checkUser = await authModel.findOne({ email: req.body.email });
  // console.log(req.body ,checkUser);
  if (!checkUser) {
    res.status(400).send({ result: checkUser, message: "User not Found." });
  } else {
    let check_pass = await bcrypt.compare(
      req.body.password,
      checkUser.password
    );
    if (check_pass) {
      res.status(200).send({ message: "Login Successful." });
    } else {
      res.status(400).send({ message: "your credential is wrong." });
    }
  }
};

module.exports = { SignUp, SignIn };
