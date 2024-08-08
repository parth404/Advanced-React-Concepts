import { useState } from "react";
import { Counter } from "./Counter";
import { PureCounter } from "./PureCounter";
import List from "./List";

function App() {
  const [name, setName] = useState("");
  const [initialCount, setInitialCount] = useState(0);
  return (
    <>
      <h1>React Memo Example</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setInitialCount((c) => c + 1)}>+</button>
      <br />
      <Counter initialCount={initialCount} otherProp={name} />
      <br />
      <h1>Pure Component Counter</h1>
      <PureCounter initialCount={initialCount} />
      <br />
      <h2>Example List to demonstrate performance optimisation</h2>
      <List />
    </>
  );
}

export default App;
