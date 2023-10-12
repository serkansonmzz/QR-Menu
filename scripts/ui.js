import { menuList } from "../app.js";

export function renderMenuItems(data) {
  //dizdeki her bir eleman için bir item oluşturup ekrana basacak.
  menuList.innerHTML = data
    .map(
      (
        item
      ) => `<a id="card" href="#" class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"
      >
        <img class="rounded shadow img-fluid" src="${item.img}" />
        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${item.price.toFixed(2)}₺</p>
          </div>
          <p class="lead">
          ${item.desc.slice(0, 80) + "..."}
          </p>
        </div>
      </a>`
    )
    .join(" "); //map arraye aktarıyor bunları yapıştırıp dizi yapıyoruz.
}
