import { renderMenuItems } from "./scripts/ui.js";

//* html'den gelenler
export const menuList = document.querySelector("#menu-list");
const buttonsArea = document.getElementById("buttons");

//sayfanın yüklenme anını izleme
document.addEventListener("DOMContentLoaded", fetchMenu);

let data;

async function fetchMenu() {
  const response = await fetch("./db.json");
  data = await response.json();
  //console.log(data.menu);
  renderMenuItems(data.menu);
}
