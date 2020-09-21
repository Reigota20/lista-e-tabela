// lista agora virou GLOBAL
var minhaLista = [];

function add() {
	console.log('add()');

	// variavel LOCAL
	var nome = document.getElementById('inputNome').value;

	console.log('NOME: ', nome);

	// metodo PUSH() adiciona um elemento no FINAL da lista
	minhaLista.push(nome);
	// metodo UNSHIFT() adiciona um elemento no INICIO da lista
	// minhaLista.unshift(nome);

	console.log(minhaLista);
	list();
}

function remove() {
	console.log('remove()');

	// como remover um elemento de um array
	// metodo POP() remove um elemento no FINAL da lista
	minhaLista.pop();
	// metodo SHIFT() remove um elemento no INICIO da lista
	// minhaLista.shift();

	console.log(minhaLista);
	list();
}

function list() {
    document.getElementById('lista').innerHTML = minhaLista;
}

function clear() {
	console.log('clear()');
	minhaLista = [];
}