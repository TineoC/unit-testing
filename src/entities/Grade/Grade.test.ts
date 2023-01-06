import { describe, expect, test } from "vitest";
import { Grade } from "./Grade";
import { Subject } from "../Subject/Subject";

describe("Grades should", () => {
	const construccion = new Subject("IDS326", "Construccion de Software", 4);

	test("be greater or equal than 70", () => {
		const reprobatedGrade = new Grade(69, construccion);

		expect(reprobatedGrade.approved()).toBe(false);
	});

	test("not be greater than 100", () => {
		expect(() => new Grade(105, construccion)).toThrowError(
			"Score should be in between 0 and 100"
		);
	});
});
