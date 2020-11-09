import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import GifCard from './GifCard';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('GifCard tests', () => {

  it("should render correctly with it's the passed props", () => {

    const testUrl = 'https://mygifs.com/gifs/gif1.gif';

    const gifPayload = {
        id: 1,
        url: testUrl
    };

    act(() => {
      render(<GifCard {...gifPayload} />, container);
    });

    expect(
      container.querySelector("[data-testid='image']").getAttribute("src")
    ).toEqual(testUrl);

    expect(
      container.querySelector("[data-testid='gifcard']").getAttribute("id")
    ).toEqual('1');

  });

});
