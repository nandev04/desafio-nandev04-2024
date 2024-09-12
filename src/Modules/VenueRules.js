function venueRules(type, quantity) {
	let recintosPoss;

	// Conjunto de regras já predefinidas com base nos animais existentes em cada recinto
	switch (type) {
		case 'LEAO':
			recintosPoss = [5];
			break;
		case 'LEOPARDO':
			recintosPoss = [];
			break;
		case 'CROCODILO':
			recintosPoss = [4];
			break;
		case 'MACACO':
			recintosPoss = [1, 3];
			quantity > 1 && recintosPoss.push(2);
			break;
		case 'GAZELA':
			recintosPoss = [1, 3];
			break;
		case 'HIPOPOTAMO':
			recintosPoss = [3, 4];
			break;
	}
	return recintosPoss;
}
export { venueRules };
