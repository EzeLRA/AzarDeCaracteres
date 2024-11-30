window.addEventListener("load",inicio);

const tamIni = 2;

//Funcion capturador de eventos
function inicio(){
	document.querySelector("#botonMostrar").addEventListener("click",generar);
}

//Funcion generador de claves
function generar(){
	let entradaDatos = document.querySelector("#Numeros").value;
	let tam = Number(entradaDatos);

	//Cadena basica aleatoria 
	let cadenaRandom = "";
	if(tam>0){
		cadenaRandom = Math.random().toString(36).substring(tamIni,tamIni+tam);
	}else{
		cadenaRandom = "Tamaño invalido";
	}
	
	
	document.querySelector("#Resultado").innerHTML = cadenaRandom;
}
