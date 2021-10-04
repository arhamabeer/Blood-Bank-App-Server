const express = require("express");
const cors = require("cors");
const bd = require("body-parser");
const mongoose = require("mongoose");

const mainRoute = require("./src/router/main");

const app = express();
const port = 4000;
const db_uri =
  "mongodb+srv://arham:arham123@cluster0.mqxig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(cors());
app.use(bd.urlencoded({ extended: false }));
app.use(bd.json());

mongoose.connect(db_uri, {});

mongoose.connection.on("connected", () => {
  console.log("Database Connected...");
});

mongoose.connection.on("error", () => {
  console.log("Database not Connected...");
});

app.use(mainRoute);

app.listen(port, () => {
  console.log("server is running...");
});
