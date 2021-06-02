const express = require("express");
const app = express();
const port = 3001;
//path
app.get("/", (req, res) => {
  res.send({
    data: "Hola Mundo",
  });
});

app.listen(port, () => {
  console.log(`The App is online in port ${port}`);
});
