const mongoose = require("mongoose");

//definimos el Schema
const UserSchema = new mongoose.Schema(
  {
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// definimos el Modelo
module.exports = mongoose.model("user", UserSchema);
