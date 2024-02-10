import { createCard } from "./helpers/createCard.js";

export function createCards(data) {
  return data.map(createCard);
}
