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
      return { success: false, err };
    }
  }
  async delete(id) {
    try {
      const response = await ItemStorage.delete(id);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = Item;
