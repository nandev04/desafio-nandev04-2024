// LISTA DE ANIMAIS ACEITOS E SUAS CARACTERÍSTICAS
const animais = [
	{
		tipo: 'LEAO',
		tamanho: 3,
		bioma: ['savana'],
	},
	{
		tipo: 'LEOPARDO',
		tamanho: 2,
		bioma: ['savana'],
	},
	{
		tipo: 'CROCODILO',
		tamanho: 3,
		bioma: ['rio'],
	},
	{
		tipo: 'MACACO',
		tamanho: 1,
		bioma: ['savana', 'floresta'],
	},
	{
		tipo: 'GAZELA',
		tamanho: 2,
		bioma: ['savana'],
	},
	{
		tipo: 'HIPOPOTAMO',
		tamanho: 4,
		bioma: ['savana', 'rio'],
	},
];

// LISTA DE RECINTOS DISPONÍVEIS
let recintos = [
	{
		numero: 1,
		bioma: ['savana'],
		tamanhoTot: 10,
		aniExist: ['MACACO', 'MACACO', 'MACACO'],
	},
	{
		numero: 2,
		bioma: '[floresta]',
		tamanhoTot: 5,
		aniExist: [],
	},
	{
		numero: 3,
		bioma: ['savana', 'rio'],
		tamanhoTot: 7,
		aniExist: ['GAZELA'],
	},
	{
		numero: 4,
		bioma: 'rio',
		tamanhoTot: 8,
		aniExist: [],
	},
	{
		numero: 5,
		bioma: 'savana',
		tamanhoTot: 9,
		aniExist: ['LEAO'],
	},
];

export { animais, recintos };
