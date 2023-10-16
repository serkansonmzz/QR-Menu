import { renderButtons, renderMenuItems } from "./scripts/ui.js";

//* html'den gelenler
export const menuList = document.querySelector("#menu-list");
const buttonsArea = document.getElementById("buttons");

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

// tıklanılan kategoriyi belirleme
buttonsArea.addEventListener("click", (e) => {
  if (e.target.id !== "buttons") {
    // div id = buttons ya o gelmesin tıklanan sadece buttonlar gelsin
    renderButtons(e.target.innerText); //all, breakfast gibi içerik gidiyor functiona
    // seçili kategoriye erişme
    const selected = e.target.dataset.category;

    if (selected === "all") {
      // filtreme yapma api den gelen verileri ekana bas
      renderMenuItems(data.menu, menuList);
    } else {
      // seçili kategoriy e göre filtrele
      const filtred = data.menu.filter((i) => i.category === selected);
      // filtrelenmiş veriyi ekrana bas
      renderMenuItems(filtred, menuList);
    }
  }
});
