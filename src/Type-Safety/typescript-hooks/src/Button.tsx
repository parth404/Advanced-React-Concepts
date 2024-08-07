// import type { ComponentProps } from "react";
// import Child from "./Child";

// type ButtonProps = {
//   outline?: boolean;
// } & ComponentProps<typeof Child>;

type ButtonProps = {
  outline?: boolean;
};

const Button = ({ outline, ...props }: ButtonProps) => {
  return (
    <button
      style={{
        color: "red",
        backgroundColor: "white",
        border: outline ? "1px solid blue" : "none",
        borderRadius: "5px",
        cursor: "pointer",
        width: "100px",
        height: "30px",
      }}
      {...props}
    >
      Clck me
    </button>
  );
};

export default Button;
