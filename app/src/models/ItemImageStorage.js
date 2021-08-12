"use strict";

const db = require("../config/db");

class ItemImageStorage {
  static async insert(imgInfo) {
    try {
      const query = "INSERT INTO ItemImage(item_id, img_url) VALUES(?,?)";
      const result = await db.query(query, [imgInfo.item_id, imgInfo.img_url]);
      if (result) return { success: true };
    } catch (err) {
      return { success: true, err };
    }
  }
  static async delete(id) {
    try {
      const query = "DELETE FROM ItemImage WHERE id = ?";
      const result = await db.query(query, [id]);
      if (result) return { success: true };
    } catch (err) {
      return { success: false, err };
    }
  }
}
module.exports = ItemImageStorage;
