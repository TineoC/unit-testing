import { Subject } from "../Subject/Subject";
export class Grade {
	private readonly score: number;
	private readonly subject: Subject;

	constructor(score: number, subject: Subject) {
		this.score = score;
		this.subject = subject;
		if (!(score >= 0 && score <= 100)) {
			throw new Error("Score should be in between 0 and 100");
		}
	}

	approved(): boolean {
		return this.score >= 70;
	}
}
