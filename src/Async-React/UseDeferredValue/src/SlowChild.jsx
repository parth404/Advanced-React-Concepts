/* eslint-disable react/prop-types */
import { memo } from "react";

function Component({ query }) {
  const start = performance.now();
  while (start > performance.now() - 100) {
    // Artificial delay
  }

  return (
    <>
      <h1>Query Results</h1>
      {query}
    </>
  );
}

export const SlowChild = memo(Component);
