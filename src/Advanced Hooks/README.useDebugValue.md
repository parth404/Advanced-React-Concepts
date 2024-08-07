## Debugging Custom Hooks

`useDebugValue` is a React hook that can be used to display a label for custom hooks in React DevTools. It is useful for providing additional information about the custom hook's state or behavior.

## When to Use

- **Custom Hooks:** When you have created a custom hook and want to provide a meaningful label for it in React DevTools.

## Syntax

```javascript
useDebugValue(value);
```

### Value:
The value to be displayed as the label in React DevTools.

Example

```jsx
import React, { useDebugValue, useState } from 'react';

function useCustomHook() {
  const [count, setCount] = useState(0);

  useDebugValue(`Count: ${count}`);

  return {
    count,
    increment: () => setCount(count + 1),
    decrement: () => setCount(count - 1),
  };
}

function CustomHookExample() {
  const { count, increment, decrement } = useCustomHook();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CustomHookExample;
```

In this example, useDebugValue is used to display the current count value as a label in React DevTools for the useCustomHook custom hook.

### Note
useDebugValue is an optional hook and is not required for the functionality of custom hooks. It is primarily used for debugging and providing additional information in development environments.

```markdown
## Debugging Custom Hooks

`useDebugValue` is a React hook that can be used to display a label for custom hooks in React DevTools. It is useful for providing additional information about the custom hook's state or behavior.

## When to Use

- **Custom Hooks:** When you have created a custom hook and want to provide a meaningful label for it in React DevTools.

## Syntax

```javascript
useDebugValue(value);
```

### Value:
The value to be displayed as the label in React DevTools.

Example
```jsx
import React, { useDebugValue, useState } from 'react';

function useCustomHook() {
  const [count, setCount] = useState(0);

  useDebugValue(`Count: ${count}`);

  return {
    count,
    increment: () => setCount(count + 1),
    decrement: () => setCount(count - 1),
  };
}

function CustomHookExample() {
  const { count, increment, decrement } = useCustomHook();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CustomHookExample;
```