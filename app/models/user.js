const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
    default: "https://www.saschathiele.com/static/img/logotipos/js.jpg",
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = mongoose.model("users", UserSchema);
