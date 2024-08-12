import { useState, Suspense } from "react";
import { Child } from "./Child";
import { ErrorBoundary } from "./ErrorBoundary";

function App() {
  const [cutoff, setCutoff] = useState(1);

  return (
    <>
      <input
        type="number"
        value={cutoff}
        onChange={(e) => setCutoff(e.target.value)}
      />
      <ErrorBoundary fallback={<h1>Error</h1>}>
        <Suspense fallback={<h1>Suspended</h1>}>
          {/* Suspense will render all the child components together, once it's done loading*/}
          <h1>Hi</h1>
          <Child cutoff={cutoff} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;

// Suspense is used to wrap around the components that are being loaded asynchronously and
// ErrorBoundary is used to wrap around the components that might throw errors.
// Suspense is used to handle the loading state of the components that are being loaded asynchronously and
// ErrorBoundary is used to handle the errors that are thrown by the components.
