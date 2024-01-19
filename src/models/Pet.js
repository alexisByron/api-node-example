const { Schema, model } = require("mongoose");

const PetSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
  createBy: {
    type: Schema.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model("Pet", PetSchema);
