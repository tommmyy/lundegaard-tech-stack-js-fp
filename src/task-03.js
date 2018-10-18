// Použij možností nové syntaxe pro zkrácení zápisu object literálů.
// Použij další konstrukce k refaktoru, pokud budou třeba.

var getPerson = function(name, surname) {
	return {
		name: name,
		surname: surname,
		reportName: function() {
			return [name, surname].join(' ');
		}
	};
};


console.log(getPerson('Darth', 'Vader').reportName());
