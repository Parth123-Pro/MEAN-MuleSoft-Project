const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
price:{ 
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Negative price aren't real.");
    },
  },
});

const Crypto = mongoose.model("Crypto",Schema);

module.exports = Crypto;
