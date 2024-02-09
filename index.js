import { data } from "./db.js"
console.log(data);

const listEl = document.querySelector(".list");
const list = data.map((e) => {
  const liEl = document.createElement("li");
  const imgEl = document.createElement("img");
  const divEl = document.createElement("div");
  const h3El = document.createElement("h3");
  const pEl = document.createElement("p");
  liEl.classList.add("list-item");
  imgEl.classList.add("list-item-img");
  imgEl.src = e.img;
  imgEl.alt = e.name;
  divEl.classList.add("list-item-wrap-text");
  h3El.classList.add("list-item-title");
  h3El.textContent = e.name;
  pEl.classList.add("list-item-text");
  pEl.textContent = e.phone;
  divEl.append(h3El, pEl);
  liEl.append(imgEl, divEl);
  return liEl;

});
console.log(list);
  listEl.append(...list)
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
