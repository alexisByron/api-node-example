const UserModel = require("../../models/User");

const deleteById = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) throw new Error("Id is required");

    const resultDelete = await UserModel.findByIdAndDelete(id);

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
