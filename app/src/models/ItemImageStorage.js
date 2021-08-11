"use strict";

const db = require("../config/db");

class ItemImageStorage {
  static async save(imgInfo) {
    try {
      const query = "INSERT INTO ItemImage(item_id, img_url) VALUES(?,?)";
      const result = await db.query(query, [imgInfo.item_id, imgInfo.img_url]);
      if (result) return { success: true };
    } catch (err) {
      return { success: true, err };
    }
  }
}
module.exports = ItemImageStorage;
