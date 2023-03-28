import { Card } from "../../types/Card";
import data from "../card/card.json";
import "../card/card.scss";

/**
 * Card decorator function
 *
 * This function accepts props defined in types/Card.ts and
 * marshals in data from the card.json file located in this
 * file's directory.
 *
 * From here, we would look to target the "app" div defined
 * in our "card.html" file where we will now be able to append
 * a parent (wrapper) element and using all the child elements
 * this component comprises to create a re-usable component.
 *
 * @param {string} title Title text (h1)
 * @param {string} body Body text (p)
 * @param {Object} image Image source/alt
 * @param {Object} button Button href/label
 */
function decorate({ title, body, image, button }: Card) {
  const app = document.getElementById("app");
  const parent = document.createElement("div");

  // Image (if defined)
  if (image) {
    const imgEl = document.createElement("img");
    imgEl.classList.add("card-img");
    imgEl.src = image.src;
    imgEl.alt = image.alt;
    parent.append(imgEl);
  }

  // Title
  const titleEl = document.createElement("h1");
  titleEl.classList.add("card-title");
  titleEl.textContent = title;
  parent.append(titleEl);

  // Body
  const contentEl = document.createElement("p");
  contentEl.classList.add("card-body");
  contentEl.textContent = body;
  parent.append(contentEl);

  // Button/Link (if defined)
  if (button) {
    const btnEl = document.createElement("a");
    btnEl.classList.add("card-btn");
    btnEl.href = button.href;
    btnEl.title = button.label;
    btnEl.textContent = button.label;
    btnEl.classList.add("btn");
    parent.append(btnEl);
  }

  parent.classList.add("card");

  app?.appendChild(parent);
}

decorate(data);
