export class Person {
	private readonly name: string;
	private readonly surnames: string;
	private readonly age: number;

	constructor(name: string, surnames: string, age: number) {
		this.name = name;
		this.surnames = surnames;

		if (!(age > 0)) throw new Error("Age should be greater than 0");

		this.age = age;
	}
}
