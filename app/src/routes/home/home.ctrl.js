"ues strict";

const Shop = require("../../models/Shop");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  getList: async (req, res) => {
    const shop = new Shop();
    const response = await shop.getAll();
    res.json(response);
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
