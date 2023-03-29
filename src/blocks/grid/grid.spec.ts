import * as fs from "fs";
import * as path from "path";
import decorate from "./grid";
import { Grid } from "../../types/Grid";

const html = fs.readFileSync(path.resolve(__dirname, "./grid.html"));

jest.dontMock("fs");

// Set up a mock data object
const mockData: Grid = {
  items: [
    {
      title: "Item 1",
      body: "This is the first item",
      color: "red",
    },
    {
      title: "Item 2",
      body: "This is the second item",
      color: "blue",
    },
  ],
};

describe("Grid ->", function () {
  beforeEach(function () {
    document.documentElement.innerHTML = html.toString();
    require("./grid");
  });

  afterEach(function () {
    jest.resetModules();
  });

  it("renders a grid with items", () => {
    decorate(mockData);
    const grid = document.querySelector(".grid");
    expect(grid).toBeTruthy();

    const items = grid?.querySelectorAll(".item");
    expect(items).toHaveLength(mockData.items.length);

    items?.forEach((item, i) => {
      const { title, body, color } = mockData.items[i];

      const h1 = item.querySelector("h1");
      expect(h1?.textContent).toBe(title);

      const content = item.querySelector("p");
      expect(content?.textContent).toBe(body);

      expect(item.classList.contains(`item-${color}`)).toBe(true);
    });
  });
});
