const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

const automatedCheck = (lista, atender, agendar) => {
	if (agendar) {
		lista.push(agendar);
	}
	if (atender === lista[0]) {
		lista.shift();
	}
	return lista.join(", ");
};

console.log(automatedCheck(pacientes, "José", "Renan"));
