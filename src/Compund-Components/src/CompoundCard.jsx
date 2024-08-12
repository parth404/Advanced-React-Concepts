/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

// A compound component is a component that manages the state and behavior of its children.
// Compound components allow you to create a more complex component that is composed of multiple smaller components.

const Context = createContext(null);

export function CompoundCard({ children, secret }) {
  return (
    <Context.Provider value={{ secret }}>
      <div style={{ border: "1px solid #ccc" }}>{children}</div>;
    </Context.Provider>
  );
}

CompoundCard.Header = Header;
CompoundCard.Footer = Footer;
CompoundCard.Body = Body;

function Header({ children }) {
  const { secret } = useContext(Context);
  return (
    <div
      style={{
        padding: 10,
        borderBottom: "1px solid #ccc",
        marginBottom: ".5rem",
      }}
    >
      {children}
      {secret}
    </div>
  );
}

function Footer({ children }) {
  return (
    <div
      style={{
        borderTop: "1px solid #ccc",
        padding: 10,
        marginTop: ".5rem",
      }}
    >
      {children}
    </div>
  );
}

function Body({ children }) {
  return <div style={{ padding: 10 }}>{children}</div>;
}
