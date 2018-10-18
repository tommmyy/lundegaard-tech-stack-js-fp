class Person {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	reportName() {
		return `${this.name} ${this.surname}`;
	}
}

class BetterPerson extends Person {
	constructor(name, surname) {
		super(name, surname);
	}

	reportName() {
		return `${super.reportName()} is the best!`;
	}
}

const darthVader = new Person('Darth', 'Vader');
const betterDarthVader = new BetterPerson('Darth', 'Vader');

console.log(darthVader.reportName());
console.log(betterDarthVader.reportName());
