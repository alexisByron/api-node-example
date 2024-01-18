const PetModel = require("../../models/Pet");

const deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("🚀 ~ deleteById ~ id:", id);
    if (!id) throw new Error("Id is required");

    const resultDelete = await PetModel.findByIdAndDelete(id);

    if (resultDelete === null) throw new Error("Id not found");

    return res.status(200).json({
      message: "exito",
      resultDelete,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = deleteById;
