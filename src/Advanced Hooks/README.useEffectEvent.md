# useEffectEvent

## Introduction

`useEffectEvent` is a React hook that allows you to handle side effects in functional components. It is similar to `useEffect`, but it is specifically designed for handling events and their side effects.

## When to Use

- **Event Handling:** When you need to handle side effects triggered by events such as clicks, form submissions, or other user interactions.
- **Asynchronous Operations:** When you need to perform asynchronous operations in response to events.
- **Cleanup:** When you need to clean up resources or subscriptions when an event handler is no longer needed.

## Syntax

```javascript
useEffectEvent(() => {
  // Your effect logic here

  return () => {
    // Cleanup logic here
  };
}, [dependencies]);
```

- Effect Function: The function that contains the effect logic.
- Cleanup Function: An optional function that cleans up resources when the effect is no longer needed.
- Dependencies Array: An array of dependencies that, when changed, will re-run the effect.

## Example
```jsx
import React, { useState, useEffectEvent } from 'react';

function EventEffectExample() {
  const [count, setCount] = useState(0);

  useEffectEvent(() => {
    const handleClick = () => {
      setCount((prevCount) => prevCount + 1);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <p>Click count: {count}</p>
    </div>
  );
}

export default EventEffectExample;
```
In this example, useEffectEvent is used to handle click events on the document. The effect increments the count state each time a click occurs, and the cleanup function removes the event listener when the component is unmounted.

## Benefits
- Event-Specific Logic: Tailored for handling side effects triggered by events.
- Asynchronous Handling: Supports asynchronous operations within event handlers.
- Resource Management: Provides a mechanism for cleaning up resources when event handlers are no longer needed.