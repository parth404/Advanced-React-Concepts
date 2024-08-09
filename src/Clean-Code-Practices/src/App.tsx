import Button from "./Button";
import { CounterDisplay } from "./CounterDisplay";
import { CounterButtons } from "./CounterButtons";
import { CounterProvider } from "./CounterContext";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
          alignItems: "flex-start",
        }}
      >
        <Button size="sm" disabled>
          Small
        </Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button As="a" href="/">
          Link
        </Button>
      </div>
      <br />
      <h2>Counter</h2>
      <CounterProvider>
        <CounterDisplay />
        <CounterButtons />
      </CounterProvider>
    </>
  );
}

export default App;
