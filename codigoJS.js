window.addEventListener("load",inicio);

const tamIni = 2;

//Funcion capturador de eventos
function inicio(){
	document.querySelector("#botonMostrar").addEventListener("click",generar);
	document.querySelector("#botonDescifrar").addEventListener("click",descifrar);
}

//Funcion generador de caracteres ASCII
function generarCaracterASCII() {
    // Rango de caracteres ASCII imprimibles: 32 (espacio) a 126 (~)
    let codigoAscii = Math.floor(Math.random() * (126 - 32 + 1)) + 33;
    return String.fromCharCode(codigoAscii);
}

//Funcion generador de claves
function generar(){
	let entradaDatos = document.querySelector("#Numeros").value;
	let tam = Number(entradaDatos);

	//Cadena basica aleatoria 
	let cadenaRandom = "";

	if(tam>0){
		for(let i=0;i<tam;i++){
			cadenaRandom += generarCaracterASCII();
		}
	}else{
		cadenaRandom = "Tamaño invalido";
	}
	console.log(cadenaRandom);
	
	
	document.querySelector("#Resultado").innerHTML = cadenaRandom;
}


//Funcion descifrador de claves
function descifrar(){
	let entradaDatos = document.querySelector("#ClaveEntrada").value;
	let tamanio = entradaDatos.length;
	let arr = entradaDatos.split('');
	console.log(arr);
	let intentos = 0;
	//Continuar
}
