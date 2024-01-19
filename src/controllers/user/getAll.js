const UserModel = require("../../models/User");

const getAll = async (req, res) => {
  let allData = await UserModel.find({});
  allData = allData.map((user) => {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
    };
  });

  res.status(200).json({
    message: "Get All service",
    data: allData,
    count: allData.length,
    user: req.user,
  });
};

module.exports = getAll;