# shop
side project

> 2021.08.12 </br>
쇼핑몰 api 기능 구현

item, itemImage Insert 시 트랜잭션 성공 하긴 했으나, 코드를 더 다듬을 필요가 있다.<br>
Delte 삭제 구현이 되었고 테이블 생성시 on delete cascade로 row가 삭제 될때 하위 연관 row도 같이 삭제되겠금 하였다.<br>

### 목표
* shop, item, itemImg 등록 만들기
* item, itemImg  아이템 정보와 이미지를 동시에 등록하게 하기(트랜잭션으로 예외처리하여 둘 중 하나 실패시 rollback)
* 삭제기능 만들기
* shop 정보 수정
* item, itemImg 동시 정보수정
