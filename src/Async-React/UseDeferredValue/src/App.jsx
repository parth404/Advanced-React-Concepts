import { useDeferredValue, useState } from "react";
import { SlowChild } from "./SlowChild";

function App() {
  const [query, setQuery] = useState("");

  // the useDeferredValue hook is used to wrap the query state value in a deferred value
  // this means that the query value will be updated in the background and not immediately

  const deferredQuery = useDeferredValue(query);

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <SlowChild query={deferredQuery} />
    </>
  );
}

export default App;
