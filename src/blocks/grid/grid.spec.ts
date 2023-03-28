import * as fs from "fs";
import * as path from "path";
const html = fs.readFileSync(path.resolve(__dirname, "./grid.html"));

jest.dontMock("fs");

describe("Grid ->", function () {
  beforeEach(function () {
    document.documentElement.innerHTML = html.toString();
    require("./grid");
  });

  afterEach(function () {
    jest.resetModules();
  });

  it("should contain five divs with class of .item", function () {
    const items = document.getElementsByClassName("item");
    expect(items.length).toBe(5);
  });
});
