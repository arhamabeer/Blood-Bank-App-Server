require("dotenv").config();
const jwt = require("jsonwebtoken");

//dotenv.config();
const isAuth = (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization || "";
    const token = authorizationHeader.split(" ")[1];
    console.log("token=>", process.env.jwt_str);
    const decoded = jwt.verify(token, process.env.jwt_str);
    req.user = decoded.user;
    // res.status(200).send({ message: "ok credentials"});
    console.log("check...", decoded);
    next();
  } catch (error) {
    res.status(401).send({ message: "server error", error: error });
  }
};

module.exports = { isAuth };
