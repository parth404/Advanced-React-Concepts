/* eslint-disable react/prop-types */
// List component

import { memo } from "react";
import { FixedSizeList } from "react-window";

// Solution to the problem of re-rendering the list component
// The list component is re-rendered every time the state changes

// we can add pagination to the list component or infinite scrolling

// we can also use react window to render only the items that are visible
// we can also use tanstack virtual to render only the items that are visible

const ITEMS = Array.from(Array(100000).keys());

function List() {
  return (
    <div>
      <FixedSizeList
        height={200}
        width={200}
        itemSize={35}
        itemCount={ITEMS.length}
      >
        {({ index, style }) => <div style={style}>{ITEMS[index]}</div>}
      </FixedSizeList>

      {/* Original list for comparison  */}
      {/* <ul style={{ height: "200px", width: "200px", overflow: "auto" }}> */}
      {/*   {ITEMS.map((item) => ( */}
      {/*     <li key={item}>{item}</li> */}
      {/*   ))} */}
      {/* </ul> */}
    </div>
  );
}

export default memo(List);
