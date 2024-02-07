const data = [
  {
    createdAt: "2024-02-02T00:28:53.770Z",
    name: "Vivian Rolfson II",
    phone: "(217) 996-2450 x518",
    img: "https://loremflickr.com/640/480",
    id: "2",
  },
  {
    createdAt: "2024-02-01T20:36:41.599Z",
    name: "Lori MacGyver",
    phone: "1-249-919-3851",
    img: "https://loremflickr.com/640/480",
    id: "3",
  },
  {
    createdAt: "2024-02-02T13:01:27.849Z",
    name: "Marcus West",
    phone: "898.825.8376 x934",
    img: "https://loremflickr.com/640/480",
    id: "4",
  },
  {
    createdAt: "2024-02-01T22:53:17.121Z",
    name: "Ms. Melissa Windler",
    phone: "(418) 959-7280 x00724",
    img: "https://loremflickr.com/640/480",
    id: "5",
  },
  {
    createdAt: "2024-02-01T17:15:47.610Z",
    name: "Beulah Morar Sr.",
    phone: "1-978-264-3318",
    img: "https://loremflickr.com/640/480",
    id: "6",
  },
  {
    createdAt: "2024-02-01T23:48:59.017Z",
    name: "Mr. Jill Sanford",
    phone: "441-300-8957 x713",
    img: "https://loremflickr.com/640/480",
    id: "7",
  },
  {
    createdAt: "2024-02-02T09:46:01.438Z",
    name: "Van Bergnaum",
    phone: "221-222-9604 x4437",
    img: "https://loremflickr.com/640/480",
    id: "8",
  },
  {
    createdAt: "2024-02-02T08:50:07.081Z",
    name: "Joann Witting",
    phone: "(574) 877-6496 x9979",
    img: "https://loremflickr.com/640/480",
    id: "9",
  },
  {
    createdAt: "2024-02-02T15:48:45.745Z",
    name: "Theresa Gutkowski",
    phone: "(335) 768-7672 x4469",
    img: "https://loremflickr.com/640/480",
    id: "10",
  },
  {
    createdAt: "2024-02-01T16:48:01.933Z",
    name: "Doyle Murray",
    phone: "508.833.2177 x94725",
    img: "https://loremflickr.com/640/480",
    id: "11",
  },
  {
    createdAt: "2024-02-02T16:05:27.082Z",
    name: "Reginald Gutkowski",
    phone: "969.286.4744 x00130",
    img: "https://loremflickr.com/640/480",
    id: "12",
  },
  {
    createdAt: "2024-02-02T08:25:44.639Z",
    name: "Rosie Price",
    phone: "248-362-2374 x168",
    img: "https://loremflickr.com/640/480",
    id: "13",
  },
  {
    createdAt: "2024-02-02T15:34:13.005Z",
    name: "Woodrow Keeling",
    phone: "1-730-974-9141 x4942",
    img: "https://loremflickr.com/640/480",
    id: "14",
  },
  {
    createdAt: "2024-02-02T06:21:53.587Z",
    name: "Shaun Williamson",
    phone: "789.466.4702 x23679",
    img: "https://loremflickr.com/640/480",
    id: "15",
  },
  {
    createdAt: "2024-02-01T18:41:59.555Z",
    name: "Javier Kozey Sr.",
    phone: "989.719.8933 x5707",
    img: "https://loremflickr.com/640/480",
    id: "16",
  },
  {
    createdAt: "2024-02-02T15:56:33.195Z",
    name: "Morris Powlowski",
    phone: "(664) 252-5479",
    img: "https://loremflickr.com/640/480",
    id: "17",
  },
  {
    createdAt: "2024-02-02T05:17:16.238Z",
    name: "Mike Lynch",
    phone: "1-880-414-1069 x8253",
    img: "https://loremflickr.com/640/480",
    id: "18",
  },
  {
    createdAt: "2024-02-02T14:12:23.131Z",
    name: "Sophie Wolf",
    phone: "765-755-1975",
    img: "https://loremflickr.com/640/480",
    id: "19",
  },
  {
    createdAt: "2024-02-02T03:40:56.063Z",
    name: "Vernon Stamm",
    phone: "348.895.9382",
    img: "https://loremflickr.com/640/480",
    id: "20",
  },
];


const list = data.map((e) => {
    const liEl = document.createElement("li");
    const imgEl = document.createElement("img");
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const pEl = document.createElement("p");
    liEl.classList.add("list-item");
    liEl.append(imgEl)
    imgEl.classList.add("list-item-img");
    imgEl.src = e.img;
    imgEl.alt = e.name;
    divEl.classList.add("list-item-wrap-text");
   
    h3El.classList.add("list-item-title");
    h3El.textContent = e.name
    pEl.textContent = e.phone;
    pEl.classList.add("list-item-text");
    divEl.append(h3El);
    divEl.append(pEl);
    console.log(liEl);

//   console.log(e);
//   let item = document.createElement("li");
//   item.className = "list-item";
//   item.innerHTML = `
//                 <img src="${obj.img}" alt="${obj.name}">
//                 <p>Name: ${obj.name}</p>
//                 <p>Phone: ${obj.phone}</p>
//               `;
//   listEl.prepend(item);
});

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
