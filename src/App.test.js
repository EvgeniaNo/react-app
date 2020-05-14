import React from "react";
import { render } from "@testing-library/react";
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

test("renders favourite artist without fetch", () => {
  const { getByText } = render(<App />);
  const artistElement = getByText(/madonna/i);
  expect(artistElement).toBeInTheDocument();
});
