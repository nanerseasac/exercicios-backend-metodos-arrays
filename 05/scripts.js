const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

const agendarPaciente = (pacientes, paciente) => {
	const arr = pacientes.slice();
	arr.push(paciente);

	return arr.join(", ");
};
console.log(agendarPaciente(pacientes, "Fabio"));

const atenderPaciente = (pacientes, atend) => {
	const arr = pacientes.slice()
	if(arr[0] === atend) {
		arr.shift()
	}

	return arr.join(", ");
};

console.log(atenderPaciente(pacientes, "Pedro"));

const cancelarAtendimento = (pacientes, cancelarAtendimento) => {
	const arr = pacientes.slice();
	if (arr.includes(cancelarAtendimento)) {
		const index = arr.indexOf(cancelarAtendimento);
		arr.splice(index, 1);
	}

	return arr.join(", ");
};

console.log(cancelarAtendimento(pacientes, "Maria"));
