const validator = require("validator");
const UserModel = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../../services/jwt");

const insert = async (req, res) => {
  const params = req.body;
  try {
    const nameIsValid = params.name !== undefined && !validator.isEmpty(params.name);
    const emailIsValid = params.name !== undefined && !validator.isEmpty(params.email);
    const passwordIsValid = params.name !== undefined && !validator.isEmpty(params.password);

    if (!nameIsValid) throw new Error("param name is required");
    if (!emailIsValid) throw new Error("param email is required");
    if (!passwordIsValid) throw new Error("param password is required");

    params.password = bcrypt.hashSync(params.password, 10);

    const existeUser = await UserModel.findOne({ email: params.email });

    if (existeUser) throw new Error("email already exists");

    const newUser = new UserModel(params);

    const resultInset = await newUser.save();

    const token = jwt.createToken(resultInset);

    return res.status(200).json({
      message: "exito",
      token
    });
  } catch (error) {
    res.status(400).json({
      sttatus: 'error',
      message: error.message,
    });
  }
};

module.exports = insert;
