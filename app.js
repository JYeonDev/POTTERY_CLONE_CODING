const TEXT = document.querySelector(".text");
const FILTER = document.querySelector(".filter");
const PRODUCT_MENU = document.querySelector(".item_menu");

const HAMBERGER = document.querySelector(".hamberger");
const HEADER = document.querySelector("header");
const NAV = document.querySelector(".nav_list_first");

const onClick = () => {
  PRODUCT_MENU.classList.toggle("toggle");
};

FILTER.addEventListener("click", onClick);

const clickEvent = () => {
  HEADER.classList.toggle("active");
  NAV.classList.toggle("active");
};

HAMBERGER.addEventListener("click", clickEvent);
