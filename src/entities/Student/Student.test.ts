import { describe, expect, test } from "vitest";
import { Subject } from "../Subject/Subject";
import { Student } from "../Student/Student"
import Major from "../../types/Majors";



describe("Credits Should", () => {
    const construccion =
        new Subject("IDS326", "Construccion de Software", 4);

    const labConstruccion
        = new Subject("IDS326L", "Lab. Construccion de Software", 1);

    const moviles =
        new Subject("IDS349", "Desarrollo de Aplicaciones Moviles", 3);

    const labMoviles =
        new Subject("IDS349L", "Lab. Desarrollo de Aplicaciones Moviles", 1);

    const alex =
        new Student(
            "Alex José", "Bujosa Cruz", 20,
            Major["Ing. de Software"], [],
            [construccion, labConstruccion, moviles], 8
        );
    test("be less than 8", () => {

        expect(() => alex.addSubject(labMoviles)).toThrowError(
            "Credits Should be less than 8"
        );
    });

});
