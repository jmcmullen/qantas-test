import React, { useState } from "react";
import styled from "@emotion/styled";

import ListItem from "./ListItem";
import { Result } from "../types.d";

interface ListItemProps {
  items: Result[];
}

function List({ items }: ListItemProps) {
  const [sortBy, setSortBy] = useState("low");

  const sortedItems = items?.sort((a: any, b: any) =>
    sortBy === "high"
      ? b.offer.displayPrice.amount - a.offer.displayPrice.amount
      : a.offer.displayPrice.amount - b.offer.displayPrice.amount
  );

  return (
    <>
      <Row>
        <div>
          <strong>{items?.length}</strong> <em>hotels in</em>{" "}
          <strong>Sydney</strong>
        </div>
        <div>
          <strong>
            Sort by:{" "}
            <select onChange={(e) => setSortBy(e.target.value)}>
              <option value="low">Price low-high</option>
              <option value="high">Price high-low</option>
            </select>
          </strong>
        </div>
      </Row>
      {sortedItems &&
        sortedItems.map((i: any, j: any) => (
          <ListItem item={i} index={j} key={i.id} />
        ))}
    </>
  );
}

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

export default List;
