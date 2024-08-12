import { useCounterValue } from "./useCounterContext";

export function CounterDisplay() {
  const { count } = useCounterValue()!;

  return <div>{count}</div>;
}
