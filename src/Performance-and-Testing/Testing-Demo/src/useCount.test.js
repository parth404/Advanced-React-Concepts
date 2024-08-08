import { renderHook, act } from "@testing-library/react";
import { describe, expect, it } from "vitest";
// import userEvent from "@testing-library/user-event";
import { useCount } from "./useCount";

describe("useCount", () => {
    it("inc/dec when the funcs are called", () => {
        const {result} = renderHook(({initialCount}) => useCount(initialCount), {initialProps: {initialCount: 0}});
        expect(result.current.count).toBe(0);

        act(() => result.current.incrementCount());
        expect(result.current.count).toBe(1);

        act(() => result.current.decrementCount());
        expect(result.current.count).toBe(0);
    });
});
