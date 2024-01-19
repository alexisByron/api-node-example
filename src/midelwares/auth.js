const jwt = require("../services/jwt");

const isAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(403).json({
        sttatus: 'error',
        message: "Token is required",
      });
    }

    const tokenData = jwt.decodeToken(token);

    if (!tokenData) {
      return res.status(403).json({
        sttatus: 'error',
        message: "Token is invalid",
      });
    }

    req.user = tokenData;
    next();
  } catch (error) {
    res.status(403).json({
      sttatus: 'error',
      message: error.message,
    });
  }
};
module.exports = { isAuth };
