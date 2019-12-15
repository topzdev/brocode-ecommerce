const input_number = e => {
	let inp = e.children[0];
	let plus = e.children[1].children[0];
	let minus = e.children[1].children[1];

	let value = parseInt(inp.value);
	plus.addEventListener('click', () => {
		if (value != inp.getAttribute('max')) {
			inp.value = value + 1;
		}
	});
	minus.addEventListener('click', () => {
		if (value != inp.getAttribute('min')) {
			inp.value = value - 1;
		}
	});
};
