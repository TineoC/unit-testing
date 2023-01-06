export class Subject {
	private readonly code: string;
	private readonly name: string;
	private readonly credits: number;

	constructor(code: string, name: string, credits: number) {
		this.code = code
		this.name = name;
		this.credits = credits;

		if (!(credits >= 0 && credits <6)) throw new Error("Credits should be between 0 and 5");
	}
}
