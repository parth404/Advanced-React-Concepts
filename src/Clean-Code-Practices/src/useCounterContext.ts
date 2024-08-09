import { useContext } from "react";
import { DispatchContext, ValueContext } from "./CounterContext";

export function useCounterValue() {
  const context = useContext(ValueContext);
  if (!context) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
}

export function useCounterDispatch() {
  const context = useContext(DispatchContext);
  if (!context) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
}
