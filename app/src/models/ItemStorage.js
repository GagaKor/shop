"use strict";

const db = require("../config/db");

class ItemStorage {
  static async save(item) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO ShopItem(shop_id, item_name, item_description, item_price, item_title)";
      db.query(
        query,
        [
          item.shop_id,
          item.item_name,
          item.item_description,
          item.item_price,
          item.item_title,
        ],
        (err) => {
          if (err) reject(`${err}`);
          else resolve({ success: true });
        }
      );
    });
  }
}

module.exports = ItemStorage;
