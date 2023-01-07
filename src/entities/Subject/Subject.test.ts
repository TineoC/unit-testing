import { describe, expect, test } from "vitest";
import { Subject } from "../Subject/Subject";

describe("Credits should", () => {
    test("be between 0 and 5", () => {
        expect(() => new Subject("IDS326", "Construccion de Software", 6))
            .toThrowError("Credits should be between 0 and 5");
    });

});
