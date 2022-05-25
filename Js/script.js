var texto = document.querySelector(".texto1");
var mensagem = document.querySelector(".mensagem")

var botaoCriptografar = document.querySelector("#criptografar");
var botaoDescriptografar = document.querySelector("#descriptografar");
var botaoCopiar = document.querySelector("#copiar");


botaoCriptografar.addEventListener("click", function() {

	mensagem.style.backgroundImage="none";

	var textoPuro = texto.value;
	textoPuro = textoPuro.toLowerCase();
	
	var textoPronto = encriptar(textoPuro);

	mensagem.textContent = textoPronto;

});

botaoDescriptografar.addEventListener("click", function(){

	mensagem.style.backgroundImage="none";
	var textoPuro = texto.value;
	textoPuro = textoPuro.toLowerCase();

	mensagem.textContent = descriptografar(textoPuro);
})

botaoCopiar.addEventListener("click", function(){
	var textoCopiado = mensagem;

	textoCopiado.select();
	document.execCommand("copy");

})

function encriptar(texto) {

	let codigoMatriz = [ 
		["e", "enter"], 
		["i", "imes"], 
		["a", "ai"],
		["o", "ober"], 
		["u", "ufat"]
	];

	for (var i = 0; i < codigoMatriz.length; i++) {

		if (texto.includes(codigoMatriz[i] [0])) {

			texto = texto.replaceAll(codigoMatriz[i] [0], codigoMatriz[i] [1]);
		}
	}	
	return texto;
}
function descriptografar(texto) {
	let matrizCodigo = [
		["enter", "e"],
		["imes", "i"],
		["ai", "a"],
		["ober", "o"],
		["ufat", "u"]
	];
	for(var i = 0 ; i < matrizCodigo.length; i++) {

		if(texto.includes(matrizCodigo[i] [0])) {
			
			texto = texto.replaceAll(matrizCodigo[i] [0], matrizCodigo[i] [1]);
		};
	};
	return texto;
}

