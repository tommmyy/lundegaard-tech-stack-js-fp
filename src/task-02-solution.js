import { add, o, compose, reduce, map, filter, gte, prop } from 'ramda';

const employees = [
	{ id: 1, age: 41, salary: 40000 },
	{ id: 2, age: 33, salary: 33000 },
	{ id: 3, age: 53, salary: 53000 },
	{ id: 4, age: 28, salary: 28000 },
	{ id: 5, age: 26, salary: 26000 },
];
// 1
console.log(
	compose(
		reduce((a, b) => a + b, 0),
		map((x) => x.salary),
		filter((x) => x.age < 40)
	)(employees)
);

// 2
console.log(
	compose(
		reduce((a, b) => a + b, 0),
		map(prop('salary')),
		filter((x) => x.age < 40)
	)(employees)
);
// 3
console.log(
	compose(
		reduce(add, 0),
		map(prop('salary')),
		filter((x) => x.age < 40)
	)(employees)
);
// 4
console.log(
	compose(
		reduce(add, 0),
		map(prop('salary')),
		filter(o(gte(40), prop('age')))
	)(employees)
);
