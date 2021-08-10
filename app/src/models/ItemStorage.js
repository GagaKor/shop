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
        query_1,
        [
          item.shop_id,
          item.item_name,
          item.item_description,
          item.item_price,
          item.item_title,
        ],
        (err) => {
          console.log("Err" + err);
        }
      );
      const query_2 = "SELECT * FROM ShopItem si order by id desc limit 1 ";
      const item_id = conn.query(query_2);
      console.log(item_id);
      if (item_id) {
        const query_3 = "INSERT INTO (item_id, img_url) VALUESE(?,?)";
        conn.query(query_3, [item_id, item.item_url]);
      }
      conn.commit();
    } catch (err) {
      await conn.rollback;
    }
  }
}
module.exports = ItemStorage;

//  db.query(
//    query,
//    [
//      item.shop_id,
//      item.item_name,
//      item.item_description,
//      item.item_price,
//      item.item_title,
//    ],
//    (err) => {
//      if (err) reject(`${err}`);
//      else resolve({ success: true });
//    }
//  );

//
//             }
//           } else {
//             conn.rollback();
//           }
//         }
//  try {
//    await db.getConnection(async (err, conn) => {
//      if (!err) {
//        await conn.beginTransaction(async (err) => {
//          if (err) {
//            console.log("Transaction Err" + err);
//          } else {
//            const query_1 =
//              "INSERT INTO ShopItem(shop_id, item_name, item_description, item_price, item_title) VALUES(?,?,?,?,?)";
//            conn.query(
//              query_1,
//              [
//                item.shop_id,
//                item.item_name,
//                item.item_description,
//                item.item_price,
//                item.item_title,
//              ],
//              (err) => {
//                if (!err) {
//                  const query_2 =
//                    "SELECT * FROM ShopItem si order by id desc limit 1 ";
//                  const item_id = conn.query(query_2);
//                  if (item_id) {
//                    const query_3 =
//                      "INSERT INTO (item_id, img_url) VALUESE(?,?)";
//                    conn.query(query_3, [item_id, item.img_url], (err) => {
//                      if (!err) {
//                        conn.commit();
//                      } else {
//                        conn.rollback();
//                      }
//                    });
//                  }
//                } else {
//                  conn.rollback();
//                }
//              }
//            );
//          }
//        });
//      }
//    });
//  } catch (err) {
//    db.rollback();
//  }
