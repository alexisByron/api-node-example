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
  login,
  register
} = require("../controllers/user");

const { isAuth } = require("../midelwares/auth");

router.post("/insert", insert);
router.post("/login", login);
router.post("/register", register);

router.get("/getAll", isAuth, getAll);
router.get("/getById/:id", isAuth, getById);

router.put("/update/:id", isAuth, updateById);

router.delete("/delete/:id?", isAuth, deleteById);

module.exports = router;
