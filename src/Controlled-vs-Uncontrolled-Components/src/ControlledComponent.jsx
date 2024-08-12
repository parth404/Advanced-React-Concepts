/* eslint-disable react/prop-types */

// This is an example of an uncontrolled component
// The Panel component is an uncontrolled component because it manages its own state

// The downside of uncontrolled components is that they can be difficult to manage

import { useState } from "react";

export function ControlledComponent() {
  const [activeIndex, setActiveIndex] = useState();

  return (
    <div>
      <Panel
        title="Panel 1"
        isOpen={activeIndex === 0}
        onToggle={() => {
          setActiveIndex((i) => {
            if (i === 0) return;
            return 0;
          });
        }}
      >
        lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Panel>
      <Panel
        title="Panel 2"
        isOpen={activeIndex === 1}
        onToggle={() => {
          setActiveIndex((i) => {
            if (i === 1) return;
            return 1;
          });
        }}
      >
        lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Panel>
      <Panel
        title="Panel 3"
        isOpen={activeIndex === 2}
        onToggle={() => {
          setActiveIndex((i) => {
            if (i === 2) return;
            return 2;
          });
        }}
      >
        lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Panel>
    </div>
  );
}

function Panel({ title, children, isOpen, onToggle }) {
  return (
    <div style={{ border: "1px solid #777", padding: ".5rem" }}>
      <h2>{title}</h2>
      {isOpen && <p>{children}</p>}

      <button onClick={onToggle}>{isOpen ? "Hide" : "Show"}</button>
    </div>
  );
}
