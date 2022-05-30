const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    minLength: 10,
    required: true,
    lowercase: true,
    unique: true,
  },
  phone_num: {
    type: Number,
    maxLength: 10,
  },
  image_url: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
