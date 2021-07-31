const shop_name = document.querySelector("#shop_name"),
  shop_description = document.querySelector("#shop_description"),
  shop_location = document.querySelector("#shop_location"),
  shopbtn = document.querySelector("#shop-btn");

shopbtn.addEventListener("click", insert);

function insert() {
  const req = {
    shop_name: shop_name.value,
    shop_description: shop_description.value,
    shop_location: shop_location.value,
  };
  console.log(req);
}
