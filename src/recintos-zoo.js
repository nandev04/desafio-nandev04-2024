// Importações dos módulos
import { analyzePremises } from './Modules/AnalyzePremises.js';
import { animais } from './generalVariables/variables.js';

class RecintosZoo {
	analisaRecintos(animal, quantity) {
		// Verifica se o animal informado existe na base de dados
		const checkAnimal = animais.filter(
			(ani) => ani.tipo.trim() == animal?.toUpperCase(),
		);

		// Lança um erro caso a quantidade ou o animal seja inválido, ou caso as condições sejam cumpridas, executa a função principal
		if (checkAnimal.length > 0 && quantity > 0) {
			let result = analyzePremises(
				checkAnimal[0].tipo,
				checkAnimal[0].tamanho,
				quantity,
			);
			return {
				erro: result.length > 0 ? false : 'Não há recinto viável',
				recintosViaveis: result <= 0 ? (result = false) : result,
			};
		} else if (quantity <= 0) {
			return { erro: 'Quantidade inválida', recintosViaveis: false };
		} else {
			return { erro: 'Animal inválido', recintosViaveis: false };
		}
	}
}
export { RecintosZoo as RecintosZoo };
