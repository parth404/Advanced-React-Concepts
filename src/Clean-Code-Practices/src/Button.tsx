import { ComponentPropsWithoutRef, ElementType } from "react";
import styles from "./Button.module.css";

type ButtonProps<T extends ElementType> = {
  As?: T;
  size?: "sm" | "md" | "lg";
} & ComponentPropsWithoutRef<T>;

const DEFAULT_TYPE = "button";

function Button<T extends ElementType = typeof DEFAULT_TYPE>({
  As,
  size = "md",
  className = "",
  ...btnProps
}: ButtonProps<T>) {
  const Component = As ?? DEFAULT_TYPE;

  return (
    <Component
      {...btnProps}
      className={`${styles.button} ${styles[size]} ${className}`}
    />
  );
}

export default Button;
