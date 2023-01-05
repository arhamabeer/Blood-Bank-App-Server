const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  email: { type: String },
  password: { type: String },
  address: { type: String },
  bloodGroup: { type: String },
  city: { type: String },
  fname: { type: String },
  gender: { type: String },
  wanted: { type: String },
  age: { type: Number },
  contact: { type: Number },
});

const authModel = mongoose.model("authentication", authSchema);

module.exports = authModel;
