import React from "react";
import { render, screen, within } from "@testing-library/react";
import Rating from "./Rating";
import { RatingType } from "../types.d";

test("renders star rating type correctly", () => {
  render(<Rating value={1} type={RatingType.STAR} />);
  const starEls = screen.getAllByTestId("rating-shape");
  starEls.forEach((starEl) => {
    expect(starEl).toHaveAttribute("href", "#star");
  });
});

test("renders self rating type correctly", () => {
  render(<Rating value={1} type={RatingType.SELF} />);
  const starEls = screen.getAllByTestId("rating-shape");
  starEls.forEach((starEl) => {
    expect(starEl).toHaveAttribute("href", "#circle");
  });
});

test("renders each possible value correctly", () => {
  const { rerender } = render(<Rating value={0} type={RatingType.STAR} />);
  for (let i = 0; i < 10; i++) {
    rerender(<Rating value={i * 0.5} type={RatingType.STAR} />);
    const isHalf = (i * 0.5) % 1 !== 0;
    const elIndex = isHalf ? i * 0.5 - 0.5 : i * 0.5;
    const lastEl = screen.getByTestId(`rating-step-${elIndex}`);
    const shapeEl = within(lastEl).getByTestId("rating-shape");

    // Check mask is enabled for half stars.
    expect(shapeEl).toHaveAttribute("mask", isHalf ? "url(#half)" : "");

    // Check all stars after current value are disabled.
    for (let j = 4; j > elIndex; j--) {
      const endEl = screen.getByTestId(`rating-step-${j}`);
      expect(endEl).toHaveAttribute("fill", "#ffefbe");
    }

    // Check all stars up to current value are enabled.
    for (let j = 0; j < elIndex; j++) {
      const startEl = screen.getByTestId(`rating-step-${j}`);
      expect(startEl).toHaveAttribute("fill", "#fece3c");
    }
  }
});
