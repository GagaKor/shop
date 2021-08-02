"use strict";

const { data } = require("../../../../TODOAPP/app/src/config/logger");
const db = require("../config/db");

class ShopStorate {
  static async save(shopInfo) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO Shop(memberId ,shop_name, shop_description, shop_location)values(?,?,?,?)";
      db.query(
        query,
        [
          shopInfo.memberId,
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

  static async getAll() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM Shop";
      db.query(query, (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data);
      });
    });
  }
}

module.exports = ShopStorate;
