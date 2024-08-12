import { useState, Suspense, createContext } from "react";
import { Child } from "./Child";
import { ErrorBoundary } from "./ErrorBoundary";
import "./App.css";

export const ThemeContext = createContext();

function App() {
  const [cutoff, setCutoff] = useState(1);
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={isDark ? "dark" : "light"}>
      <input
        type="number"
        value={cutoff}
        onChange={(e) => setCutoff(e.target.value)}
      />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <ErrorBoundary fallback={<h1>Error</h1>}>
        <Suspense fallback={<h1>Suspended</h1>}>
          <Child cutoff={cutoff} />
        </Suspense>
      </ErrorBoundary>
    </ThemeContext.Provider>
  );
}

export default App;
