const mongoose = require("mongoose");
const DB_URI = `mongodb://localhost:27017/api_practice`;

module.exports = () => {
  const conn = () => {
    mongoose.connect(
      DB_URI,
      {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.log("DB: ERROR!");
        } else {
          console.log("CONEXIÓN CORRECTA!");
        }
      }
    );
  };
  conn();
};
