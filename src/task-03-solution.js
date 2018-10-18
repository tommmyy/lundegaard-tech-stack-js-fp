// Použijte funkce
// cond, is, filter, keys
// k implemetanci funkce `getClassName`.

import { cond, identity, compose, keys, filter, join, is } from 'ramda';

const getClassName = cond([
	[is(String), identity],
	[
		is(Array),
		compose(
			join(' '),
			filter(Boolean)
		),
	],
	[
		is(Object),
		compose(
			join(' '),
			keys,
			filter(Boolean)
		),
	],
]);

console.log(getClassName('button')); // "button"
console.log(getClassName(['button', undefined, 'primary'])); // "button primary"
console.log(getClassName({ button: true, primary: false })); // "button"
