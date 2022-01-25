//tipos de datos

//variables primitivas
let nombre = "Pepa"; //String
let edad = 25; //Entero - int
let sueldo = 25.5; //float - decimal
let hijos = false; //booleanos - verdadero o falso
let cedula = "10162939393";
let tel = "393939393";

//camelCase
const fechaRegistro = new Date(); //Saca la fecha completa (dia, mes, años, hora)

//Concatenar: Unir +
console.log(
  " Hola " +
    nombre +
    " tu edad es: " +
    edad +
    " tu sueldo es: " +
    sueldo +
    " tienes hijos: " +
    hijos +
    " tu cedula es: " +
    cedula,
  fechaRegistro
);
