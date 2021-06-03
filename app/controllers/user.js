getData = (req, res) => {
  res.send({
    data: "Esto viene desde USER",
  });
};

module.exports = { getData };
