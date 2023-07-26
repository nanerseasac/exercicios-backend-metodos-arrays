const nomes = ["Juninho", "Vidal", "Guido", "Dani", "Ruli", "Diego"];

const divideArr = (arr, num) => {
	let grupo1 = "";
	let grupo2 = "";
	if (arr.length > num) {
		const arrLength = arr.length;
		const division = arr.slice(0, num).join(", ");
		const rest = num - arrLength;
		const division2 = arr.slice(rest).join(", ");
		grupo1 += division;
		grupo2 += division2;
	}
	return `Grupo 1:${grupo1} & Grupo 2: ${grupo2} `;
};

console.log(divideArr(nomes, 4));
