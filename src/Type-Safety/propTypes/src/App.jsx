import Child from "./Child";

function App() {
  return (
    <>
      <h1>App</h1>
      <Child
        name="Kyle"
        age={28}
        address={{ city: "Hi", street: "Main Street" }} // This will throw an warning
        status={"LOADING"}
        progress={{ current: 1, total: 10 }}
      >
        <p>Hi I am Kyle</p>
      </Child>
    </>
  );
}

export default App;
