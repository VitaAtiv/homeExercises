function createCard ({img, name, phone}) {
      const liEl = document.createElement("li");
      const imgEl = document.createElement("img");
      const divEl = document.createElement("div");
      const h3El = document.createElement("h3");
      const pEl = document.createElement("p");
      liEl.classList.add("list-item");
      imgEl.classList.add("list-item-img");
      imgEl.src = img;
      imgEl.alt = name;
      divEl.classList.add("list-item-wrap-text");
      h3El.classList.add("list-item-title");
      h3El.textContent = name;
      pEl.classList.add("list-item-text");
      pEl.textContent = phone;
      divEl.append(h3El, pEl);
      liEl.append(imgEl, divEl);
      return liEl; 
}