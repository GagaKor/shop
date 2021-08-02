"ues strict";

const Shop = require("../../models/Shop");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
};

const process = {
  sendData: async (req, res) => {
    const shop = new Shop(req.body);
    const response = await shop.insert();
    console.log(response);
    res.json(response);
  },
};

module.exports = {
  output,
  process,
};
