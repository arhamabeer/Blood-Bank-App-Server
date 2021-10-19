const authModel = require("../models/authSchema");

const GetData = async (req, res) => {
  let result = await authModel.find({});

  let filtered_result = result.map((v) => {
    return {
      address: v.address,
      bloodGroup: v.bloodGroup,
      city: v.city,
      fname: v.fname,
      gender: v.gender,
      wanted: v.wanted,
      age: v.age,
    };
  });
  res
    .status(200)
    .send({ data: filtered_result, message: "All data fetched successfully." });
  // console.log("filter=> ", result);
  // console.log("filter=> ", filtered);
};

const getProfile = async (req, res) => {
  try {
    let result = await authModel.findOne({ _id: req.user });
  } catch (e) {}
};

module.exports = { GetData, getProfile };
