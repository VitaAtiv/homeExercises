// import { data } from "./db.js";
// import { createCards } from "./helpers/createCards.js";
// import { refs } from "./refs.js";

// const list = createCards(data);
// refs.listEl.insertAdjacentHTML ("beforeend", list.join(""));

// const listEl = refs.listEl.querySelectorAll(".list-item");
// console.log(listEl);
// refs.listEl.addEventListener("click", (e) => {
//   const card = e.target.closest(".list-item");
//   if (!card) {
//     return;
//   }
//   card.classList.toggle("active");
//   // alert("!");
// });
// listEl.forEach((e) =>
//   e.addEventListener("click", ()=>e.classList.add("active"))
// )

// refs.text.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log(e);
//   alert("text");
// });
// refs.boxChild.addEventListener("click", () => alert("box-cild"));
// refs.box.addEventListener("click", () => alert("box"));

/*
const listEl = document.querySelector("ul");
data.forEach(function (obj) {
  let everyEl = document.createElement("li");
  everyEl.className = "list-item";
  everyEl.innerHTML = `
                <img src="${obj.img}" alt="${obj.name}">
                <p>Name: ${obj.name}</p>
                <p>Phone: ${obj.phone}</p>
              `;
  listEl.prepend(everyEl);
});
*/

/*
const list = data.map((e) => {
  console.log(e);
  let item = document.createElement("li");
  item.className = "list-item";
  item.innerHTML = `
                <img src="${obj.img}" alt="${obj.name}">
                <p>Name: ${obj.name}</p>
                <p>Phone: ${obj.phone}</p>
              `;
  listEl.prepend(item);
});
*/

/*
const listEl = document.querySelector("ul");
let li_1 = document.createElement("li")
li_1.className = "list-item";
li_1.innerHTML = "firstEl";
listEl.prepend(li_1);

const list = data.map(
  (e) => {
    console.log(e);
    return `<li class="list-item">
            <img
              class="list-item-img"
              src="${e.img}"
              alt=""
            />
            <div class="list-item-wrap-text">
              <h3 class="list-item-title">${e.name}</h3>
              <p class="list-item-text">${e.phone}</p>
            </div>
          </li>`;}
);

console.log(list.join(""));
listEl.innerHTML = list.join("");
console.log(list);
*/
