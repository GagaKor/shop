"use strict";

const shopStorage = require("./ShopStorage");

class Shop {
  constructor(body) {
    this.body = body;
  }

  async insert() {
    const data = this.body;
    try {
      const memberId = 1;
      const response = await shopStorage.save(data, memberId);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = Shop;
