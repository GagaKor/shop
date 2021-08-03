"use strict";

const db = require("../config/db");

class ItemImageStorage {
  static async save(imgInfo) {
    const query = "INSERT INTO (item_id, img_url) VALUESE(?,?)";
    db.query(query, [imgInfo.item_id, imgInfo.img_url], (err) => {
      if (err) reject(`${err}`);
      else resolve({ success: true });
    });
  }
}

module.exports = ItemImageStorage;
