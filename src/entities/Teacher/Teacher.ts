import { Subject } from "./../Subject/Subject";
import { Major } from "../Major/Major";
import { Person } from "../Person/Person";

export class Teacher extends Person {
	private readonly major: Major;
	private readonly subjects: Subject[];

	constructor(
		name: string,
		surnames: string,
		age: number,
		major: Major,
		subjects: Subject[]
	) {
		if (age <= 18)
			throw new Error("Teacher should be at least 18 years old");

		if (subjects.length >= 4)
			throw new Error("Teacher should not bring more than 4 classes");

		super(name, surnames, age);

		this.major = major;

		this.subjects = subjects;
	}
}
