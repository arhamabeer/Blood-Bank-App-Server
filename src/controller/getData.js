const authModel = require("../models/authSchema");

const GetData = async (req, res) => {
  let result = await authModel.find({});
  res.status(200).send({data: result, message: 'All data fetched successfully.'})
  //   console.log(checkUser);
};

module.exports = { GetData };
