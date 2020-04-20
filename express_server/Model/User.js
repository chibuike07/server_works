const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userForm = new Schema({
  firstName: String,
  lastName: String,
  phoneNumber: Number,
  favoriteColor: String,
  isActive: Boolean
});

const User = mongoose.model("userForm", userForm);

module.exports = User;
