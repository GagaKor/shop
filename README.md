# shop
side project

> 2021.08.12 </br>
쇼핑몰 api 기능 구현

item, itemImage Insert 시 트랜잭션 성공 하긴 했으나, 코드를 더 다듬을 필요가 있다.<br>
Delte 삭제 구현이 되었고 테이블 생성시 on delete cascade로 row가 삭제 될때 하위 연관 row도 같이 삭제되겠금 하였다.<br>
일단 구현하긴 했으나 솔직히 이렇게 하는게 맞는건지 모르겠다.<
```
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
        (err) => {
          if (err) console.log("Err" + err);
        }
      );
      const query_2 = "SELECT * FROM ShopItem ORDER BY id DESC limit 1 ";

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
```
### 목표
* shop, item, itemImg 등록 만들기
* item, itemImg  아이템 정보와 이미지를 동시에 등록하게 하기(트랜잭션으로 예외처리하여 둘 중 하나 실패시 rollback)
* 삭제기능 만들기
* shop 정보 수정
* item, itemImg 동시 정보수정
