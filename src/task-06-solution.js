const toUpperFirst = (x) => x.charAt(0).toUpperCase() + x.slice(1);

const toUpperTag = (strings, ...values) => strings.map((value, i) => value + toUpperFirst(values[i] || '')).join('');
const renderUser = ({ name, surname }) => toUpperTag`\t<li>${name} ${surname}</li>\n`;
const renderUserList = (users) => `<ul>\n${users.map(renderUser).join('')}</ul>`;

const render = (state) => renderUserList(state.users);

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
