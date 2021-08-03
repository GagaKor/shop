"use strict";

const ItemStorage = require("./ItemStorage");

class Item {
  constructor(body) {
    this.body = body;
  }

  async insert() {
    const item = this.body;
    try {
      const response = await ItemStorage.save(item);
      return response;
    } catch (err) {
      return { seccess: false, err };
    }
  }
}

module.exports = Item;
