import React from "react";
import { render, screen } from "@testing-library/react";
import ListItem from "./ListItem";
import data from "../../public/data.json";
import { Result } from "../types.d";

const result = data.results[1] as Result;

test("renders free cancellation if available", () => {
  render(<ListItem item={result} index={0} />);
  const cancelEl = screen.getByText(/free cancellation/i);
  expect(cancelEl).toBeInTheDocument();
});

test("renders savings if available", () => {
  render(<ListItem item={result} index={0} />);
  const amount = Math.round(result.offer.savings!.amount);
  const resultsEl = screen.getByText(`Save $${amount}~`);
  expect(resultsEl).toBeInTheDocument();
});
