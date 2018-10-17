const a = { ahoj: 1, boo: 2 };

console.log({
	...a,
	...{ hello: 5 },
});
