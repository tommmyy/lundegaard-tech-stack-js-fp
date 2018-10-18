// Použij objektovou destrukturalizaci argumentu `person` ve funkci `reportName`.
// Použij defaultování argumentů k nastavení chybějících property objektu `person`>
// Použij template literals k výpisu reportu.
// Použij další konstrukce k refaktoru, pokud budou třeba.

var reportName = function(person) {
	var inputPerson = person || {};
	var name = inputPerson.name || '-';
	var surname = inputPerson.surname || '-';

	return 'Name of the person: ' + [name, surname].join(' ');
};

console.log(reportName());
console.log(reportName({ surname: 'Vader' }));
console.log(reportName({ name: 'Darth', surname: 'Vader' }));
