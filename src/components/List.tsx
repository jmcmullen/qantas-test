import React from "react";
import styled from "@emotion/styled";

import ListItem from "./ListItem";

function List({ items }: any) {
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
            <select>
              <option>Price high-low</option>
              <option>Price low-high</option>
            </select>
          </strong>
        </div>
      </Row>
      {items &&
        items.map((i: any, j: any) => (
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
