const getPerson = (name, surname) => ({
	name,
	surname,
	reportName() {
		return `${name} ${surname}`;
	},
});

console.log(getPerson('Darth', 'Vader').reportName());
