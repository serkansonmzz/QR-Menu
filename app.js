import { renderButtons, renderMenuItems } from "./scripts/ui.js";

//* html'den gelenler
export const menuList = document.querySelector("#menu-list");

//sayfanın yüklenme anını izleme
document.addEventListener("DOMContentLoaded", () => {
  fetchMenu(), renderButtons();
});

let data;

async function fetchMenu() {
  const response = await fetch("./db.json");
  data = await response.json();
  //console.log(data.menu);
  renderMenuItems(data.menu);
}
