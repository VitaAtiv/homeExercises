function createCard (card) {
      const liEl = document.createElement("li");
      const imgEl = document.createElement("img");
      const divEl = document.createElement("div");
      const h3El = document.createElement("h3");
      const pEl = document.createElement("p");
      liEl.classList.add("list-item");
      imgEl.classList.add("list-item-img");
      imgEl.src = card.img;
      imgEl.alt = card.name;
      divEl.classList.add("list-item-wrap-text");
      h3El.classList.add("list-item-title");
      h3El.textContent = card.name;
      pEl.classList.add("list-item-text");
      pEl.textContent = card.phone;
      divEl.append(h3El, pEl);
      liEl.append(imgEl, divEl);
      return liEl; 
}