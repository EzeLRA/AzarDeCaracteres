const tamIni = 2;
//let Tam = prompt("Ingrese una cadena");
let entradaDatos = document.getElementById("Numeros");

let tam = Number(entradaDatos)
console.log(tam)

//Caracter basico aleatorio
const caracterRandom = Math.random().toString(36).substring(tamIni,tamIni+1);

//Cadena basica aleatoria 
var cadenaRandom = "";
if(tam>0){
	cadenaRandom = Math.random().toString(36).substring(tamIni,tamIni+tam)
}else{
	cadenaRandom = "Tamaño invalido"
}

document.getElementById("Resultado").innerHTML = cadenaRandom;
console.log(cadenaRandom)