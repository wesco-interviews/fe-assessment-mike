import * as fs from "fs";
import * as path from "path";
const html = fs.readFileSync(path.resolve(__dirname, "./card.html"));

jest.dontMock("fs");

describe("Card ->", function () {
  beforeEach(function () {
    document.documentElement.innerHTML = html.toString();
    require("./card");
  });

  afterEach(function () {
    jest.resetModules();
  });

  it("should have access to DOM", function () {
    expect(document.getElementById("app")).toBeTruthy();
  });

  it("should contain exactly one div with class of .card", function () {
    const cards = document.getElementsByClassName("card");
    expect(cards.length).toBe(1);
  });

  it("should match snapshot", () => {
    const card = document.getElementsByClassName("card")[0];
    expect(card).toMatchSnapshot();
  });

  it("should contain a .card-title inside the .card wrapper", () => {
    const card = document.getElementsByClassName("card")[0];
    expect(card.getElementsByClassName("card-title")).toBeTruthy();
  });

  it("should contain a .card-content inside the .card wrapper", () => {
    const card = document.getElementsByClassName("card")[0];
    expect(card.getElementsByClassName("card-content")).toBeTruthy();
  });
});
