"use strict";

const itemImageStorage = require("./ItemImageStorage");

class ItemImage {
  constructor(body) {
    this.body = body;
  }
  async insert() {
    const img = this.body;
    try {
      const response = await itemImageStorage.insert(img);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async delete(id) {
    try {
      const response = await itemImageStorage.delete(id);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = ItemImage;
