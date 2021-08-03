"use strict";

const itemImageStorage = require("./ItemImageStorage");

class ItemImage {
  constructor(body) {
    this.body = body;
  }

  async insert() {
    const imgUrl = this.body;
    try {
      const response = await itemImageStorage.insert();
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = ItemImage;
