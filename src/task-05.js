// V příkladu použij operátory `rest` a `spread` pro transformaci `props` ve funkci Button.
// Použij další konstrukce k refaktoru, pokud budou třeba.

var buttonStyles = {
	primary: { color: 'red' },
	secondary: { color: 'blue' },
};

var clone = function(x) {
	return JSON.parse(JSON.stringify(x));
};

var identity = function(x) {
	return x;
};

var render = identity;

var Button = function(props) {
	var newProps = clone(props);
	var color = newProps.color;

	newProps.style = buttonStyles[color];

	delete newProps.color;

	return render(newProps);
};

console.log(
	Button({
		disabled: false,
		'aria-label': 'Close',
		color: 'primary',
	})
);
