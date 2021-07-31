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

  fetch("/sendData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.result) alert("등록 성공");
      else alert("다시 시도해 주세요");
    })
    .catch((err) => {
      console.error(err + "실패!!");
    });
}
