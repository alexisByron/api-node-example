const jwt = require("jwt-simple");
const moment = require("moment");

// TODO: cambiarlo a alguna variable de entonrno
const secret = "SECRET_JWT_API_NODE_DEMO";

const createToken = (user) => {
  const payload = {
    name: user.name,
    email: user.email,
    id: user._id,
    iat: moment().unix(),
    exp: moment().add(10, "minutes").unix(),
  };

  return jwt.encode(payload, secret);
};

const decodeToken = (token) => {
  try {
    const payload = jwt.decode(token, secret);

    if (payload.exp <= moment().unix()) {
      throw new Error("Token has expired");
    }

    return payload;
  }catch (err) {
    throw new Error(err.message);
  }
  
} 

module.exports = { createToken, decodeToken };
