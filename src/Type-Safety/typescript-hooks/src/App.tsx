import {
  createContext,
  useState,
  useRef,
  useReducer,
  useEffect,
  useContext,
} from "react";
import Child from "./Child";
import List from "./List";

type User = {
  id: string;
  name: string;
  age: number;
};

type State = {
  count: number;
};

type ContextType = {
  users: User[];
  addUser: (user: { name: string; age: number }) => void;
};

export const Context = createContext<ContextType | null>(null);

export function useUsers() {
  const usersContext = useContext(Context);
  if (!usersContext) {
    throw new Error("useUsers must be used within a UsersProvider");
  }
  return usersContext;
}

type Action =
  | {
      type: "INCREMENT";
      increaseBy: number;
    }
  | {
      type: "DECREMENT";
      decreaseBy: number;
    };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.increaseBy };
    case "DECREMENT":
      return { ...state, count: state.count + action.decreaseBy };
    default:
      throw new Error("sdf");
  }
}

function App() {
  const [value, setValue] = useState<string>();
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [users, setUsers] = useState<User[]>([]);

  function getUsers() {
    return Promise.resolve([
      { id: crypto.randomUUID(), name: "Kyle", age: 36 },
      { id: crypto.randomUUID(), name: "Sally", age: 40 },
    ]);
  }

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  function addUser({ name, age }: { name: string; age: number }) {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: crypto.randomUUID(), name, age },
    ]);
  }

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Context.Provider value={{ users, addUser }}>
      <>
        <Child name={"Kyle"} />;<h1>{value}</h1>
        <input
          type="text"
          ref={inputRef}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => inputRef.current?.focus()}>Focus</button>
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => dispatch({ type: "DECREMENT", decreaseBy: 1 })}
          >
            -
          </button>
          <button
            onClick={() => dispatch({ type: "INCREMENT", increaseBy: 1 })}
          >
            +
          </button>
          <div>{state.count}</div>
        </div>
        <div style={{ marginTop: "20px" }}></div>
      </>
      <List
        items={users}
        getKey={(item) => item.id}
        renderItem={(item) => <div>{item.name}</div>}
      />
    </Context.Provider>
  );
}

export default App;
