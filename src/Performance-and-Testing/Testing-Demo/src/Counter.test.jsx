import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter component", () => {
  it("should render the initial count", () => {
    render(<Counter initialCount={3} />);

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByTestId("count")).toBeInTheDocument();
  });

  it("should increment/decrement when clicking +/- buttons", async () => {
    const user = userEvent.setup();
    render(<Counter initialCount={0} />);
    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");

    await user.click(incrementButton);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.queryByText("0")).not.toBeInTheDocument();
    expect(await screen.findByText("1")).toBeInTheDocument();

    // Array of elements
    // expect(screen.getAllByText("1")).toBeInTheDocument();

    await user.click(decrementButton);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
