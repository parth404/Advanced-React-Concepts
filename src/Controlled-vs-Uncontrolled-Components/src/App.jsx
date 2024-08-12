import { ControlledComponent } from "./ControlledComponent";
import { UncontrolledAccordion } from "./UncontrolledAccordion";

function App() {
  return (
    <>
      <h1>Controlled Vs Uncontrolled Components</h1>
      <br />
      <UncontrolledAccordion />
      <br />
      <h1>Controlled Component</h1>
      <br />
      <ControlledComponent />
    </>
  );
}

export default App;
