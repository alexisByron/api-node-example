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
});

module.exports = model("Pet", PetSchema);