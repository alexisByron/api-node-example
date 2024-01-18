const validator = require("validator");
const PetModel = require("../../models/Pet");

const insert = async (req, res) => {
  const params = req.body;
  try {
    let nameIsValid =
      params.name !== undefined && !validator.isEmpty(params.name);

    if (!nameIsValid) throw new Error("param name is required");

    const newPet = new PetModel(params);

    const resultInset = await newPet.save();

    return res.status(200).json({
      message: "exito",
      resultInset,
    });
  } catch (error) {
    res.status(400).json({
      error: true,
      message: error.message,
    });
  }
};

module.exports = insert;
