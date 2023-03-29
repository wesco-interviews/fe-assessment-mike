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

  items.forEach(function (item: GridItem) {
    const { title, body, color } = item;
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    // Title
    const h1 = document.createElement("h1");
    h1.textContent = title;
    itemDiv.append(h1);

    // Body
    const content = document.createElement("p");
    content.textContent = body;
    itemDiv.append(content);

    // Background color
    // Alternative: Can directly apply as background color
    // itemDiv.style.backgroundColor = color;
    itemDiv.classList.add("item-" + color);

    parent.append(itemDiv);
  });

  app?.append(parent);
}

decorate(data);
