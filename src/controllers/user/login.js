const validator = require("validator");
const UserModel = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../../services/jwt");

const login = async (req, res) => {
  const params = req.body;
  try {
    const emailIsValid =
      params.email !== undefined && !validator.isEmpty(params.email);
    const passwordIsValid =
      params.password !== undefined && !validator.isEmpty(params.password);

    if (!emailIsValid) throw new Error("param email is required");
    if (!passwordIsValid) throw new Error("param password is required");

    const user = await UserModel.findOne({ email: params.email });

    if (!user) throw new Error("User not found");

    const pwd = bcrypt.compareSync(params.password, user.password);

    if (!pwd) throw new Error("Password is incorrect");

    const token = jwt.createToken(user);

    // const resultInset = await newUser.save();
    return res.status(200).json({
      message: "exito login",
      user: {
        name: user.name,
        email: user.email,
        id: user._id,
      },
      token,
    });
  } catch (error) {
    res.status(400).json({
      sttatus: 'error',
      message: error.message,
    });
  }
};

module.exports = login;
