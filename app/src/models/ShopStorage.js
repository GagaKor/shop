"use strict";

const db = require("../config/db");

class ShopStorate {
  static async save(shopInfo) {
    try {
      const query =
        "INSERT INTO Shop(memberId ,shop_name, shop_description, shop_location)VALUES(?,?,?,?)";
      const result = await db.query(query, [
        shopInfo.memberId,
        shopInfo.shop_name,
        shopInfo.shop_description,
        shopInfo.shop_location,
      ]);
      if (result) return { success: true };
    } catch (err) {
      return { success: false, err };
    }
  }

  static async delete(id) {
    try {
      const query = "DELETE FROM Shop WHERE id = ?";
      const result = await db.query(query, [id]);
      if (result) return { success: true };
    } catch (err) {
      return { success: false, err };
    }
  }

  static async getAll() {
    const query = "SELECT * FROM Shop";
    const result = db.query(query);
    return result;
  }
}

module.exports = ShopStorate;
