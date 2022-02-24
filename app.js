const TEXT = document.querySelector(".text");
const FILTER = document.querySelector(".filter");
const PRODUCT_MENU = document.querySelector(".item_menu");

const onClick = () => {
  PRODUCT_MENU.classList.toggle("toggle");
};

FILTER.addEventListener("click", onClick);
