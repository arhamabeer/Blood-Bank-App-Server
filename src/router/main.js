const express = require("express");
const router = express.Router();

router.use("/", require("./authRouter"));
router.use("/", require("./getRouter"));

module.exports = router;
