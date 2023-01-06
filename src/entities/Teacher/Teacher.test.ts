import { describe, expect, test } from "vitest";
import { Teacher } from "./Teacher";
import { Major } from "../Major/Major";
import { Subject } from "../Subject/Subject";

describe("Teachers Should", () => {
	test("not bring more than 4 classes", () => {
		expect(
			() =>
				new Teacher(
					"Christopher",
					"Tineo Reyes",
					22,
					new Major("Ing. de Software"),
					[
						new Subject("IDS326", "Construccion de Software", 4),
						new Subject(
							"IDS326L",
							"Laboratorio de Construccion de Software",
							1
						),
						new Subject("INS371", "Arquitectura del Computador", 3),
						new Subject(
							"INS371L",
							"Laboratorio de arquitectura del Computador",
							3
						),
						new Subject("ECO322", "Economia de Empresa", 1),
					]
				)
		).toThrowError("Teacher should not bring more than 4 classes");
	});

	test("bring at least one class", () => {
		test("bring one class", () => {
			const teacherBringingJustOneClass = new Teacher(
				"Christopher",
				"Tineo Reyes",
				22,
				new Major("Ing. de Software"),
				[new Subject("IDS326", "Construccion de Software", 4)]
			);

			expect(teacherBringingJustOneClass).toBeDefined();
		});

		test("bring several classes", () => {
			const teacherBringingSeveralClasses = new Teacher(
				"Christopher",
				"Tineo Reyes",
				24,
				new Major("Ing. de Software"),
				[
					new Subject("IDS326", "Construccion de Software", 4),
					new Subject(
						"IDS326L",
						"Laboratorio de Construccion de Software",
						1
					),
					new Subject("INS371", "Arquitectura del Computador", 3),
					new Subject(
						"INS371L",
						"Laboratorio de arquitectura del Computador",
						1
					),
				]
			);

			expect(teacherBringingSeveralClasses).toBeDefined();
		});
	});

	test("be at least 18 years old", () => {
		expect(
			() =>
				new Teacher(
					"Christopher",
					"Tineo Reyes",
					17,
					new Major("Ing. de Software"),
					[new Subject("IDS326", "Construccion de Software", 4)]
				)
		).toThrowError("Teacher should be at least 18 years old");
	});
});
