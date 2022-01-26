//Operadores Lógicos
/**
 * || operador lógico O
 * && operador lógico Y
 */

let saludo = prompt("Ingresa un saludo").toUpperCase();

if (saludo === "hola" || saludo === "que tal") {
  alert("bien gracias por saludar :)");
} else {
  alert("que mal, primero se saluda >:(");
}
