const usuarios = [
	{
		nome: "João",
		pets: ["Max"],
	},
	{
		nome: "Ana",
		pets: ["Pingo", "Lulu"],
	},
	{
		nome: "Beatriz",
		pets: ["Lessie"],
	},
	{
		nome: "Carlos",
		pets: ["Farofa", "Salsicha", "Batata"],
	},
	{
		nome: "Antonio",
		pets: ["Naninha"],
	},
];

const getOwner = (arr, pet) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].pets.includes(pet)) {
			if (arr[i].pets.length > 1) {
				const index = arr[i].pets.indexOf(pet);
				const petAlone = arr[i].pets.slice(index, 1);

				return `O dono(a) do(a) ${petAlone} é o(a) ${arr[i].nome}`;
			}

			return `O dono(a) do(a) ${arr[i].pets} é o(a) ${arr[i].nome}`;
		}
	}
	return `Que pena ${pet}, não encontramos seu dono(a)`;
};

console.log(getOwner(usuarios, "Naninha"));
