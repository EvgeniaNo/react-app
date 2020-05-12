import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  const mockFunction = jest.fn((arg1, arg2) => arg1);
  expect(linkElement).toBeInTheDocument();
  expect(mockFunction).toHaveBeenCalledTimes(0);
});
