// Refaktorujte pomocí nové OOP syntaxe.
// Použij další konstrukce k refaktoru, pokud budou třeba.

function Person(name, surname) {
	this.name = name;
	this.surname = surname;
}

Person.prototype.reportName = function() {
	return [this.name, this.surname].join(' ');
};


function BetterPerson(name, surname) {
	Person.call(this, name, surname);
}

BetterPerson.prototype = Object.create(Person.prototype);
BetterPerson.constructor = BetterPerson;

BetterPerson.prototype.reportName = function() {
	var name = Person.prototype.reportName.call(this);

	return [name, 'is the best!'].join(' ');
};

var darthVader = new Person('Darth', 'Vader');
var betterDarthVader = new BetterPerson('Darth', 'Vader');

console.log(darthVader.reportName());
console.log(betterDarthVader.reportName());
