import { useCounterDispatch } from "./useCounterContext";

export function CounterButtons() {
  const dispatch = useCounterDispatch()!;

  return (
    <div>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </div>
  );
}
