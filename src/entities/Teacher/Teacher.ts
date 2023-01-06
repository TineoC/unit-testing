import { Person } from "../Person/Person";

export class Teacher extends Person {
	private readonly major: string;

	constructor(name: string, surnames: string, age: number, major: string) {
		super(name, surnames, age);

		this.major = major;
	}
}
