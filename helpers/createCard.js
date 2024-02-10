// export function createCard ({img, name, phone}) {
//      return `<li class="list-item">
//             <img
//               class="list-item-img"
//               src="${img}"
//               alt=""
//             />
//             <div class="list-item-wrap-text">
//               <h3 class="list-item-title">${name}</h3>
//               <p class="list-item-text">${phone}</p>
//             </div>
//           </li>`;
// }

import { refs } from "./refs.js";

export function createCard({ img, name, phone }) {
  refs.listEl.insertAdjacentHTML(
    "afterbegin",
    `<li class="list-item">
            <img
              class="list-item-img"
              src="${img}"
              alt=""
            />
            <div class="list-item-wrap-text">
              <h3 class="list-item-title">${name}</h3>
              <p class="list-item-text">${phone}</p>
            </div>
          </li>`
  ) } ;




// function createCard({ img, name, phone }) {
//   const liEl = document.createElement("li");
//   const imgEl = document.createElement("img");
//   const divEl = document.createElement("div");
//   const h3El = document.createElement("h3");
//   const pEl = document.createElement("p");
//   liEl.classList.add("list-item");
//   imgEl.classList.add("list-item-img");
//   imgEl.src = img;
//   imgEl.alt = name;
//   divEl.classList.add("list-item-wrap-text");
//   h3El.classList.add("list-item-title");
//   h3El.textContent = name;
//   pEl.classList.add("list-item-text");
//   pEl.textContent = phone;
//   divEl.append(h3El, pEl);
//   liEl.append(imgEl, divEl);
//   return liEl;
// }


