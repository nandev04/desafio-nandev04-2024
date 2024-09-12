// Importação de varíavel geral
import { animais } from '../generalVariables/variables.js';

// Verifica se tem espécie diferente e retorna uma soma
function checkSpecies(type, rec) {
	let somaCheck = 0;
	const aniDif = new Set(rec.aniExist);

	aniDif.forEach((i) => {
		if (i !== type) {
			animais.forEach((animal) => {
				if (animal.tipo === i) {
					for (i = 0; rec.aniExist.length > i; i++)
						somaCheck += animal.tamanho + 1;
				}
			});
		} else {
			animais.forEach((animal) => {
				if (animal.tipo === i) {
					for (i = 0; rec.aniExist.length > i; i++) somaCheck += animal.tamanho;
				}
			});
		}
	});

	return somaCheck;
}

export { checkSpecies };
