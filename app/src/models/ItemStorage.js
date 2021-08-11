"use strict";

const db = require("../config/db");

class ItemStorage {
  static async save(item) {
    const conn = await db.getConnection(async (conn) => conn);
    try {
      await conn.beginTransaction();
      const query_1 =
        "INSERT INTO ShopItem(shop_id, item_name, item_description, item_price, item_title) VALUES(?,?,?,?,?)";
      conn.query(
        await query_1,
        [
          item.shop_id,
          item.item_name,
          item.item_description,
          item.item_price,
          item.item_title,
        ],
        (err, result) => {
          if (err) console.log("Err" + err);
        }
      );
      const query_2 = "SELECT * FROM ShopItem order by id desc limit 1 ";

      let item_id;
      await conn.query(query_2).then((res) => {
        item_id = res[0][0].id;
      });
      if (item_id) {
        const query_3 = "INSERT INTO ItemImage(item_id, img_url) VALUES(?,?)";
        await conn.query(query_3, [item_id, item.img_url], (err) => {
          console.log("Err : " + err);
        });
        await conn.commit();
      } else {
        console.log("rollBack");
        await conn.rollback();
      }
      return { success: true };
    } catch (err) {
      await conn.rollback();
      console.log("err : " + err);
    }
    await conn.end();
  }
}
module.exports = ItemStorage;
