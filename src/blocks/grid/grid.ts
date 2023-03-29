import { Grid, GridItem } from "../../types/Grid";
import data from "../grid/grid.json";
import "../grid/grid.scss";

/**
 * Grid Decorator
 *
 * @param {Grid} items GridItem array
 */
function decorate({ items }: Grid) {
  const app = document.getElementById("app");
  const parent = document.createElement("div");
  parent.classList.add("grid");

  items.map(({ title, body, color }: GridItem) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    // Title
    const h1 = document.createElement("h1");
    h1.textContent = title;
    itemDiv.appendChild(h1);

    // Body
    const content = document.createElement("p");
    content.textContent = body;
    itemDiv.appendChild(content);

    // Background color
    // Alternative: Can directly apply as background color
    // itemDiv.style.backgroundColor = color;
    itemDiv.classList.add(`item-${color}`);

    parent.appendChild(itemDiv);
  });

  // Add error handing
  if (app) {
    app.appendChild(parent);
  } else {
    console.error("Could not find element with id 'app'");
  }
}

decorate(data);
