const express = require("express");
const router = express.Router();

// const PetActions = require("../controllers/pet");
// const { insert, getAll, getById, updateById, deleteById } = PetActions;

const {
  insert,
  getAll,
  getById,
  updateById,
  deleteById,
} = require("../controllers/user");

router.post("/insert", insert);
router.get("/getAll", getAll);
router.get("/getById/:id", getById);
router.put("/update/:id", updateById);
router.delete("/delete/:id?", deleteById);

module.exports = router;
