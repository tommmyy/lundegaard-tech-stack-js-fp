const buttonStyles = {
	primary: { color: 'red' },
	secondary: { color: 'blue' },
};
const identity = x => x;

const render = identity;

const Button = ({ color, ...rest }) => render({
	...rest,
	style: buttonStyles[color],
});

console.log(
	Button({
		disabled: false,
		'aria-label': 'Close',
		color: 'primary',
	})
);
