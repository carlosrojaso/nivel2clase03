// Aplicacion

var num1 = 10;
var num2 = 2;
var operaciones = 0;

document.write(operaciones + "<br/>");

operaciones1 = sumaNumeros(num1,num2); //12
document.write(operaciones1 + "<br/>");

operaciones2 = restaNumeros(num1,num2);
document.write(operaciones2 + "<br/>");

res = operaciones1 + operaciones2;

document.write("Jugar con Numeros: " +  res + "<br/>");

//Functions

function sumaNumeros(num1, num2){
  var resultado = num1 + num2;
  return resultado;
}

function restaNumeros(num1, num2){
  var resultado = num1 - num2;
  return resultado;
}

function multiplicacionNumeros (num1, num2){
  var resultado = num1 * num2;
 return resultado;
}

function divisionNumeros(num1, num2){
  resultado = num1 / num2;
  return resultado;
}
