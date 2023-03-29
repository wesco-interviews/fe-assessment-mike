import "@testing-library/jest-dom/extend-expect";
import decorate from "./card";
import { Card } from "../../types/Card";

// Set up a mock data object
const mockData: Card = {
  title: "Test Title",
  body: "Test Body",
  image: {
    src: "test.png",
    alt: "Test Image",
  },
  button: {
    href: "http://test.com",
    label: "Test Button",
  },
};

describe("Card ->", function () {
  beforeEach(function () {
    // Set up a mock DOM with an "app" element
    const app = document.createElement("div");
    app.id = "app";
    document.body.appendChild(app);
  });

  afterEach(function () {
    jest.resetModules();
  });

  it("should have access to DOM", function () {
    expect(document.getElementById("app")).toBeTruthy();
  });

  it("should match snapshot", () => {
    decorate(mockData);

    const cardElement = document.querySelector(".card");
    expect(cardElement).toMatchSnapshot();
  });

  it("renders card element with image, title, body, and button", () => {
    decorate(mockData);

    const cardElement = document.querySelector(".card");
    const imgElement = document.querySelector(".card-image");
    const titleElement = document.querySelector(".card-title");
    const bodyElement = document.querySelector(".card-body");
    const buttonElement = document.querySelector(".card-btn");

    expect(cardElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
    expect(imgElement?.getAttribute("src")).toEqual(mockData.image?.src);
    expect(imgElement?.getAttribute("alt")).toEqual(mockData.image?.alt);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement?.textContent).toEqual(mockData.title);
    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement?.textContent).toEqual(mockData.body);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement?.getAttribute("href")).toEqual(mockData.button?.href);
    expect(buttonElement?.getAttribute("title")).toEqual(
      mockData.button?.label
    );
    expect(buttonElement?.textContent).toEqual(mockData.button?.label);
  });
});
