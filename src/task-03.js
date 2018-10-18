// Použijte funkce
// cond, is, filter, keys
// k implemetanci funkce `getClassName`.

const getClassName = () => {
	// TODO
};

console.log(getClassName('button')); // "button"
console.log(getClassName(['button', undefined, 'primary'])); // "button primary"
console.log(getClassName({ button: true, primary: false })); // "button"
