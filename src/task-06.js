// Napiš funkci `toUpperTag`,
// která bude sloužit jako tag ve string literálu (viz HINTS.md).
// Funkce bude transformovat veškeré výrazy pomocí funkce `toUpperFirst`;
// Následně pomocí `toUpperTag` použij ve funkci `renderUser`.

var toUpperFirst = function(x) {
	return x.charAt(0).toUpperCase() + x.slice(1);
};

var renderUser = function(person) {
	var name = person.name;
	var surname = person.surname;

	return '\t<li>' + toUpperFirst(name) + ' ' + toUpperFirst(surname) + '</li>\n';
};

var renderUserList = function(users) {
	return '<ul>\n' + users.map(renderUser).join('') + '</ul>';
};

var render = function(state) {
	return renderUserList(state.users);
};

console.log(
	render({
		users: [
			{
				name: 'darth',
				surname: 'vader',
			},
			{
				name: 'luke',
				surname: 'skywalker',
			},
		],
	})
);
