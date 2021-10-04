const express = require("express");
const router = express.Router();

router.use("/", require("./authRouter"));

module.exports = router;
