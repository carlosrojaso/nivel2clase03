/*
- Debera poder ingresar 2 valores
- Debera poder ingresar que operacion quiere realizar
- Cada operacion tendra que ser una funcion con los 2 paramentros para sumar, restar, multiplicar o dividir;
- Debera mostrar el resultado de la operacion en consola
*/
var num1 = 0;

do{
	num1 = parseInt(prompt("Ingrese num1 entre 1 y 10"));
	console.log(num1)
}
while((num1 < 1) || (num1 >=10));