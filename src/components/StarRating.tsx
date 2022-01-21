import React from "react";

interface StarRatingProps {
  value: number;
}

function StarRating({ value }: StarRatingProps) {
  return (
    <>
      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <mask id="half">
            <rect x="0" y="0" width="16" height="16" fill="#ffffff" />
            <rect x="8" y="0" width="16" height="16" fill="#555555" />
          </mask>
          <symbol id="star" viewBox="0 0 16 16">
            <path d="M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899z"></path>
          </symbol>
        </defs>
      </svg>
      {[...Array(5)].map((x: undefined, i: number) => (
        <svg
          key={i}
          width={16}
          height={16}
          fill={value >= i ? "#fece3c" : "#ffefbe"}
        >
          <use
            href="#star"
            clipRule="even-odd"
            mask={value - i === 0.5 ? "url(#half)" : ""}
          />
        </svg>
      ))}
    </>
  );
}

export default StarRating;
