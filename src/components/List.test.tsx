import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import List from "./List";
import data from "../../public/data.json";
import { Result } from "../types.d";

const results = data.results as Result[];

test("renders no results with 0 items", () => {
  render(<List items={[]} />);
  const resultsEl = screen.getByText(/no results found/i);
  expect(resultsEl).toBeInTheDocument();
});

test("renders every result with valid data", () => {
  render(<List items={results} />);
  results.forEach((result) => {
    const titleEl = screen.getByText(result.property.title);
    expect(titleEl).toBeInTheDocument();
  });
});

test("sorts low to high filter correctly", () => {
  render(<List items={results} />);
  userEvent.selectOptions(
    screen.getByRole("combobox"),
    screen.getByRole("option", { name: "Price low-high" })
  );
  const optionEl = screen.getByRole("option", {
    name: "Price low-high",
  }) as HTMLOptionElement;
  expect(optionEl.selected).toBe(true);

  let prevPrice = 0;
  screen.getAllByTestId("price").forEach(({ textContent }) => {
    const price = parseInt(textContent!);
    expect(price).toBeGreaterThan(prevPrice);
    prevPrice = price;
  });
});

test("sorts high to low filter correctly", () => {
  render(<List items={results} />);
  userEvent.selectOptions(
    screen.getByRole("combobox"),
    screen.getByRole("option", { name: "Price high-low" })
  );
  const optionEl = screen.getByRole("option", {
    name: "Price high-low",
  }) as HTMLOptionElement;
  expect(optionEl.selected).toBe(true);

  let prevPrice = Number.MAX_SAFE_INTEGER;
  screen.getAllByTestId("price").forEach(({ textContent }) => {
    const price = parseInt(textContent!);
    expect(price).toBeLessThan(prevPrice);
    prevPrice = price;
  });
});
