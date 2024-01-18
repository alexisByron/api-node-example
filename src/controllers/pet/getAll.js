const PetModel = require("../../models/Pet");

const getAll = async (req, res) => {
  let allData = await PetModel.find({});
  allData = allData.map((pet) => {
    return {
      id: pet._id,
      name: pet.name,
      age: pet.age,
    };
  });

  res.status(200).json({
    message: "Get All service",
    data: allData,
    count: allData.length,
  });
};

module.exports = getAll;