import { createContext, Dispatch, ReactNode, useReducer } from "react";

type State = {
  count: number;
};
type Action = {
  type: "INCREMENT" | "DECREMENT";
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

type ValueContext = { count: number };

type DispatchContext = Dispatch<Action>;

export const ValueContext = createContext<ValueContext | null>(null);
export const DispatchContext = createContext<DispatchContext | null>(null);

type CounterProviderProps = {
  children: ReactNode;
};
export function CounterProvider({ children }: CounterProviderProps) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <DispatchContext.Provider value={dispatch}>
      <ValueContext.Provider value={state}>{children}</ValueContext.Provider>
    </DispatchContext.Provider>
  );
}
