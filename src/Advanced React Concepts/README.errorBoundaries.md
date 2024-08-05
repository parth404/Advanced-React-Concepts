
### README.errorBoundaries.md

```markdown
# Error Boundaries

## Introduction

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole component tree. They help improve the user experience by preventing the entire application from crashing due to a single error.

## Usage

To create an error boundary, you need to define a class component that implements either `static getDerivedStateFromError()` or `componentDidCatch()` lifecycle methods.

### Example

```jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function BuggyComponent() {
  throw new Error("I crashed!");
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}

export default App;
```

In this example, the ErrorBoundary component catches errors thrown by its child components and displays a fallback UI.

## Benefits
1. Improved User Experience: Prevents the entire application from crashing due to a single error.
2. Error Logging: Allows you to log errors for debugging and monitoring.
3. Graceful Degradation: Provides a way to gracefully degrade the UI when an error occurs.

## Common Use Cases
1. Critical Components: Wrapping critical components that should not cause the entire app to crash.
2. Third-Party Integrations: Wrapping components that integrate with third-party libraries or APIs.
3. Complex UIs: Wrapping complex UI components that are more prone to errors.
