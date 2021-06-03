const model = require("../models/user");

getData = (req, res) => {
  model.find({}, (err, docs) => {
    res.send({
      docs,
    });
  });
};

postData = (req, res) => {
  const data = req.body;
  model.create(data, (err, docs) => {
    if (err) {
      res.status(422).send({ error: "Error" });
    } else {
      res.send({ data: docs });
    }
  });
};

module.exports = { getData, postData };
