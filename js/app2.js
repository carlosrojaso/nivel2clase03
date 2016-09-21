// Aplicacion

var x = 10;
var y = 2;


// llamar funciones
restaNumeros(x,y);
multiplicacionNumeros(x,y);
divisionNumeros(x,y);

// Funciones

function restaNumeros(num1, num2){
  var resultado = num1 - num2;
  document.write("El resultado de la resta es: " + resultado + "<br>");
}

function multiplicacionNumeros (num1, num2){
  var resultado = num1 * num2;
  document.write("El resultado de la multiplicación es: " + resultado + "<br>");
}

function divisionNumeros(num1, num2){
  resultado = num1 / num2;
  document.write("El resultado de la división es : " + resultado);
}