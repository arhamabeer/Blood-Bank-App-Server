const express = require("express");
const router = express.Router();
const { GetData, getProfile} = require("../controller/getData");
const {isAuth}  = require("../middlewares/isAuth");

router.get("/getdata", isAuth, GetData);
router.get("/profile", isAuth, getProfile);

module.exports = router;
