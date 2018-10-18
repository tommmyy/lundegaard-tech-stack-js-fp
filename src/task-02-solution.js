const reportName = ({ name = '-', surname = '-' } = {}) => `${name} ${surname}`;

console.log(reportName());
console.log(reportName({ surname: 'Vader' }));
console.log(reportName({ name: 'Darth', surname: 'Vader' }));
