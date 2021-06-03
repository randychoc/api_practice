const express = require("express");
const app = express();
const port = 3001;
const userRouter = require("./app/routes/user");
const itemsRouter = require("./app/routes/items");
const initDB = require("./config/db");

//for parsing json
app.use(
  express.json({
    limit: "20mb",
  })
);
// for parsing application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    limit: "20mb",
    extended: true,
  })
);
//path
app.use(userRouter);
app.use(itemsRouter);

app.listen(port, () => {
  console.log(`The App is online! Running in http://localhost:${port}`);
});

initDB();
