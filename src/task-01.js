// 1. Refaktoruj pomocí arrow funkce. Snaž se použít nejkratší syntaktickou variantu.
// 2. Použij Exponentiation Operator

var pow = function(a, b) {
	return Math.pow(a, b);
};

var square = function(x) {
	return pow(x, 2);
};

console.log(square(3));
