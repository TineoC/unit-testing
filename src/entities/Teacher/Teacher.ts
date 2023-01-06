import Major from "../../types/Majors";
import { Person } from "../Person/Person";

export class Teacher extends Person {
	private readonly major: Major;

	constructor(name: string, surnames: string, age: number, major: Major) {
		super(name, surnames, age);

		this.major = major;


	}
}
