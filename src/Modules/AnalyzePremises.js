// Importações dos módulos
import { recintos } from '../generalVariables/variables.js';
import { checkSpecies } from './CheckSpecies.js';
import { venueRules } from './VenueRules.js';

function analyzePremises(type, size, quantity) {
	let result = [];
	let viableEnclosures = [];
	const ruleEnclosure = venueRules(type, quantity);

	// Calcula o espaço livre para os recintos que correspondam com as regras de negócio
	function calcSize() {
		recintos.forEach((rec) => {
			ruleEnclosure.forEach((numPos) => {
				if (rec.numero === numPos) {
					const tamTot = size * quantity + checkSpecies(type, rec);
					if (rec.tamanhoTot >= tamTot && rec) {
						result.push(numPos);
					}
				}
			});
		});

		// Verifica se a array result não está vazia (ou seja, contém recinto viável) e adiciona dinamicamente cada resultado para a array de recintosViáveis, array essa que será retornada mostrando os recintos viáveis para o determinado animal e sua determinada quantidade
		result.length &&
			result.forEach((n) => {
				viableEnclosures.push(
					`Recinto ${n} (espaço livre: ${
						recintos[n - 1].tamanhoTot -
						(size * quantity + checkSpecies(type, recintos[n - 1]))
					} total: ${recintos[n - 1].tamanhoTot})`,
				);
			});
	}

	ruleEnclosure.length > 0 ? calcSize() : (viableEnclosures = false);
	return viableEnclosures;
}

export { analyzePremises };
