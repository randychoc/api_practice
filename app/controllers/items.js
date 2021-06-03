getItems = (req, res) => {
  res.send({
    data: "Esto viene desde ITEMS",
  });
};

module.exports = { getItems };
