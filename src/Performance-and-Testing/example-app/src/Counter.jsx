/* eslint-disable react/prop-types */
import { useState, memo } from "react";

// Using memo to prevent re-rendering of the component
// this helps in performance optimization
// memo is a higher order component that will prevent re-rendering of the component
// this is useful when the component is a functional component
// and the props passed to the component are the same

function Component({ initialCount, otherProp }) {
  const [value, setValue] = useState(initialCount);

  return (
    <>
      <p>{otherProp}</p>
      <button onClick={() => setValue((v) => v - 1)}>-</button>
      {value}
      <button onClick={() => setValue((v) => v + 1)}>+</button>
    </>
  );
}

// export const Counter = memo(Component, (prevProps, nextProps) => {
//   return prevProps.otherProp === nextProps.otherProp;
// });

export const Counter = memo(Component);
