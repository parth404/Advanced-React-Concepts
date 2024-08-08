import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { delayedFunc, sum } from "./utils";

describe("sum", () => {
    it("should add the numbers passed to it", () => {
        const a = 2;
        const b = 3;

        expect(sum(a, b)).toBe(a+b);
    });
    });

describe("delayedFunc", () => {
        beforeEach(() => {
            vi.useFakeTimers();
        }
        );

        afterEach(() => { 
            vi.useRealTimers();
        }
        );

        it("should call the passed in function after a delay", () => {
            const func = vi.fn();
            delayedFunc(func);
            vi.runAllTimers();

            expect(func).toHaveBeenCalledOnce();
            expect(func).toHaveBeenCalledWith(2);

        });
        });

