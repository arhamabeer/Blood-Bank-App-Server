const express = require("express");
const router = express.Router();
const { GetData} = require("../controller/getData");

router.get("/getdata", GetData);


module.exports = router;
