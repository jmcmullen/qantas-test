import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders quantas logo", () => {
  render(<App />);
  const logoEl = screen.getByAltText(/qantas/i);
  expect(logoEl).toBeInTheDocument();
});
