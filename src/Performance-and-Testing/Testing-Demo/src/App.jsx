import { Counter } from "./Counter";
import { NameForm } from "./NameForm";
import { PostList } from "./PostList";

function App() {
  return (
    <>
      <h1>React Testing Library Demo</h1>
      <br />
      <Counter />
      <br />
      <NameForm onSubmit={(name) => alert(name)} />
      <br />
      <PostList />
    </>
  );
}

export default App;
