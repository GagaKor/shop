"ues strict";

const Shop = require("../../models/Shop");
const Item = require("../../models/Item");
const ItemImage = require("../../models/ItemImage");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  getList: async (req, res) => {
    const shop = new Shop();
    const response = await shop.getAll();
    res.json(response);
  },

  deleteShop: async (req, res) => {
    const id = req.params.id;
    const shop = new Shop();
    const response = await shop.delete(id);
    res.json(response);
  },
  deleteItem: async (req, res) => {
    const item = new Item();
    const id = req.params.id;
    const response = await item.delete(id);
    res.json(response);
  },
  deleteItemimg: async (req, res) => {
    const id = req.params.id;
    const itemimage = new ItemImage();
    const response = await itemimage.delete(id);
    res.json(response);
  },
};

const process = {
  saveShop: async (req, res) => {
    const shop = new Shop(req.body);
    const response = await shop.insert();
    console.log(response);
    res.json(response);
  },
  saveItem: async (req, res) => {
    console.log(req.body);
    const item = new Item(req.body);
    const response = await item.insert();
    res.json(response);
  },
  saveItemimg: async (req, res) => {
    console.log(req.body);
    const itemimage = new ItemImage(req.body);
    const response = await itemimage.insert();
    res.json(response);
  },
};

module.exports = {
  output,
  process,
};
