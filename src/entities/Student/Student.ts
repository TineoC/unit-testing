import Major from "../../types/Majors";
import { Grade } from "../Grade/Grade";
import { Person } from "../Person/Person";
import { Subject } from "../Subject/Subject";

export class Student extends Person {
	private readonly major: Major;
	private readonly grades: Grade[];
	private readonly subjects: Subject[];
	private readonly maxCredits: number;

	constructor(
		name: string,
		surnames: string,
		age: number,
		major: Major,
		grades: Grade[],
		subjects: Subject[],
		maxCredits: number
	) {
		super(name, surnames, age);

		this.major = major;
		this.grades = grades;
		this.subjects = subjects;
		this.maxCredits = maxCredits;
	}

	addSubject(subject: Subject) {
		if (!(subject.GetCredit() + this.TotalCurrentCredits() > this.maxCredits)) {
			this.subjects.push(subject);
		}
		else {
			throw new Error(
				"Credits Should be less than " + this.maxCredits.toString());
		}
	}

	TotalCurrentCredits(): number {
		var totalCredits: number = 0;
		this.subjects.map((subject) => {
			totalCredits += subject.GetCredit();
		})

		return totalCredits;

	}
}
