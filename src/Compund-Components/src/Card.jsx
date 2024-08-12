/* eslint-disable react/prop-types */
export function Card({ header, footer, children }) {
  return (
    <div style={{ border: "1px solid #ccc" }}>
      {header && (
        <div
          style={{
            padding: 10,
            borderBottom: "1px solid #ccc",
            marginBottom: ".5rem",
          }}
        >
          {header}
        </div>
      )}
      <div style={{ padding: 10 }}>{children}</div>
      {footer && (
        <div
          style={{
            borderTop: "1px solid #ccc",
            padding: 10,
            marginTop: ".5rem",
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}
