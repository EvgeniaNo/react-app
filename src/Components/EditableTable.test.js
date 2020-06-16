import { fireEvent, render } from "@testing-library/react";
import React from "react";

import EditableTable from "./EditableTable";

test("renders table and button", () => {
  const { getByTestId } = render(<EditableTable />);
  const table = getByTestId("table");
  const button = getByTestId("button");

  expect(table).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("removes an element when pressing the button", () => {
  const { getByTestId } = render(<EditableTable />);
  const tableContent = getByTestId("table").textContent;
  const button = getByTestId("button");

  expect(tableContent).toBe("[1, 2, 3, 4]");

  fireEvent.click(button);

  const updatedTableContent = getByTestId("table").textContent;
  expect(updatedTableContent).toBe("[1, 2, 3]");
});
