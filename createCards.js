function createCards (data) {
    return data.map((e) => {
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
}