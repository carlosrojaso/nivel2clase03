/*
- Debera poder ingresar un dia de la semana
- Debera poder compararlo con todos los dias de la semana
- Debera evaluar si es un dia de semana y fin de semana mediante un mensaje similar a 'El dia es habil' sino 'El dia es fin de semana';
- En caso de cnontrar el dia utilizar la sentencia break y terminar el for
*/

// Programa
var dia = prompt("Ingresa un dia de la semana", "Lunes").toLowerCase();
var semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];


// llamada a la funcion
mostrarTipoDia(dia);

if(flag == 2){
var dia2 = prompt("Ingresa un dia de la semana", "Lunes").toLowerCase();
// llamada a la funcion
mostrarTipoDia(dia2);
}

// Funciones
function mostrarTipoDia(parametro1){ 
var flag = 0;
for(i in semana){
  
if( parametro1 == "lunes"){
	flag = 1;
	document.write("dia habil");
       break;
}
else if(parametro1 == "martes"){
	flag = 1;
	document.write("dia habil");
       break;
}
else if(parametro1 == "miercoles"){
	flag = 1;
	document.write("dia habil");
       break;

}
else if(parametro1 == "jueves"){
	flag = 1;
	document.write("dia habil");
       break;
}
else if(parametro1 == "viernes"){
	flag = 1;
	document.write("dia habil");
       break;
}
else if(parametro1 == "sabado"){
	flag = 2;
	document.write("es un dia de fin de semana");
       break;
}
else if(parametro1 == "domingo"){
	flag = 2;
	document.write("es un dia de fin de semana");
       break;
}	


}
}
