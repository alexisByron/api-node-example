const updateById = (req, res) => {
  res.status(200).json({
    message: "update by id service, in contruction",
    params: req.body,
  });
};

module.exports = updateById;
