import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { NameForm } from "./NameForm";

describe("NameForm component", () => {
  it("should call onSubmit when the value is valid for name", async () => {
    const onSubmitMock = vi.fn();
    const user = userEvent.setup();

    render(<NameForm onSubmit={onSubmitMock} />);

    const name = "kyle";
    const nameInput = screen.getByLabelText("Name");
    const submitButton = screen.getByText("Submit");

    await user.clear(nameInput);
    await user.click(submitButton);

    expect(onSubmitMock).not.toHaveBeenCalled();

    await user.type(nameInput, name);
    await user.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledOnce();
    expect(onSubmitMock).toHaveBeenCalledWith(name);
  });
});
