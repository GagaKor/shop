"use strict";

const db = require("../config/db");

class ShopStorate {
  static async save(shopInfo, memberId) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO Shop(memberId ,shop_name, shop_description, shop_location)values(?,?,?,?)";
      db.query(
        query,
        [
          memberId,
          shopInfo.shop_name,
          shopInfo.shop_description,
          shopInfo.shop_location,
        ],
        (err) => {
          if (err) reject(`${err}`);
          else resolve({ success: true });
        }
      );
    });
  }
}

module.exports = ShopStorate;
