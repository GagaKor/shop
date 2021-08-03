const shop_name = document.querySelector("#shop_name"),
  shop_description = document.querySelector("#shop_description"),
  shop_location = document.querySelector("#shop_location"),
  shopbtn = document.querySelector("#shop-btn");

shopbtn.addEventListener("click", insert);

function insert() {
  if (!shop_name.value || !shop_description.value || !shop_location.value)
    return alert("빈칸 없이 입력해주세요.");
  const req = {
    shop_name: shop_name.value,
    shop_description: shop_description.value,
    shop_location: shop_location.value,
  };

  fetch("/saveShop", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.success) {
        alert("등록 성공");
        console.log(res);
      } else alert("다시 시도해 주세요");
    })
    .catch((err) => {
      console.error(err + "실패!!");
    });
}

function getAll() {
  fetch("/getList", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.success) {
        console.log("res : " + res);
      } else console.log("err");
    })
    .catch((err) => {
      console.error(err + "실패!!");
    });
}
