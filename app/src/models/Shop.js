"use strict";

const shopStorage = require("./ShopStorage");

class Shop {
  constructor(body) {
    this.body = body;
  }

  async insert() {
    const data = this.body;
    try {
      const response = await shopStorage.save(data);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async getAll() {
    try {
      const response = await shopStorage.getAll();
      return response[0];
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = Shop;
