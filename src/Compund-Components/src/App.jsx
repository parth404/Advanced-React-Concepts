import { Card } from "./Card";
import { CompoundCard } from "./CompoundCard";

function App() {
  return (
    <>
      <Card
        header={<h1 style={{ margin: 0 }}>Header</h1>}
        footer={
          <>
            <button>Ok</button>
            <button>Cancel</button>
          </>
        }
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quae
        voluptatum, quos, doloremque voluptatem, quas aperiam in quod
        exercitationem quibusdam doloribus. Quisquam, nemo. Quisquam, nemo.
        Quisquam, nemo. Quisquam, nemo. Quisquam, nemo. Quisquam, nemo.
        Quisquam.
      </Card>
      <br />
      <h1>Example Compound Component</h1>
      <CompoundCard secret="Top Secret">
        <CompoundCard.Header>
          <h1 style={{ margin: 0 }}>Header</h1>
        </CompoundCard.Header>
        <CompoundCard.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          quae voluptatum, quos, doloremque voluptatem, quas aperiam in quod
          exercitationem quibusdam doloribus. Quisquam, nemo. Quisquam, nemo.
          Quisquam, nemo. Quisquam, nemo. Quisquam, nemo. Quisquam, nemo.
          Quisquam.
        </CompoundCard.Body>
        <CompoundCard.Footer>
          <button>Ok</button>
          <button>Cancel</button>
        </CompoundCard.Footer>
      </CompoundCard>
    </>
  );
}

export default App;
