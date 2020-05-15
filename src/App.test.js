import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

jest.mock("./CallArtist.js", () => ({
  __esModule: true,
  CallArtist: jest.fn(() => {
    return { name: "madonna" };
  }),
}));

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders favourite artist by clicking the button", () => {
  const { getByText } = render(<App />);
  const button = getByText("load");

  fireEvent.click(button);

  const artistElement = getByText(/madonna/i);
  expect(artistElement).toBeInTheDocument();
});
