# useLayoutEffect

## Introduction

`useLayoutEffect` is a React hook that is similar to `useEffect`, but it fires synchronously after all DOM mutations. This means that `useLayoutEffect` runs after the DOM has been updated but before the browser has painted, making it useful for reading layout from the DOM and synchronously re-rendering.

## When to Use

- **Reading Layout:** When you need to read layout properties (e.g., dimensions, position) from the DOM and make synchronous updates.
- **Avoiding Flicker:** When you need to make DOM updates that should not cause a flicker or flash of incorrect content.

## Syntax

```javascript
useLayoutEffect(() => {
  // Your effect code here
}, [dependencies]);
```

### Effect Function: 
The function that contains the effect logic.

### Dependencies Array: 
An array of dependencies that, when changed, will re-run the effect.

Example
```jsx
import React, { useLayoutEffect, useRef, useState } from 'react';

function LayoutEffectExample() {
  const [height, setHeight] = useState(0);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      setHeight(divRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div>
      <div ref={divRef} style={{ height: '100px', backgroundColor: 'lightblue' }}>
        This div's height is {height}px.
      </div>
    </div>
  );
}

export default LayoutEffectExample;
```

In this example, useLayoutEffect is used to read the height of a div element after it has been rendered and update the state with this value.

### Differences from useEffect
- Timing: useEffect runs after the browser has painted, while useLayoutEffect runs before the paint.
- Use Cases: useEffect is suitable for side effects that do not require synchronous DOM reads or updates, whereas useLayoutEffect is suitable for layout-related updates.
