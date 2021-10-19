const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization || "";
    const token = authorizationHeader.split(" ")[1];
    // console.log('token=>',token)
    const decoded = jwt.verify(
      token,
      "k7jnf8VKRLKFmyG48m533ZRKTKrcGYg5ieYIdWEff3awfFiO"
    );
    req.user = decoded.user;
    // res.status(200).send({ message: "ok credentials"});
    next();
  } catch (error) {
    res.status(401).send({ message: "wrong credentials", error: error});
  }
};

module.exports = { isAuth };
