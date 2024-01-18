const getById = (req, res) => {
  res.status(200).json({
    message: "Get By Id service, in contruction",
    params: req.body,
  });
};

module.exports = getById;
