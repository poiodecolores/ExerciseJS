//DOM - Document Object Model  Js puede acceder al DOM (estructura del documento HTML),
// y atravez de el , puede modificar la pagina.
//de hecho, puede modificar todos los estilos CSS, eliminar o añadir elementos y atributos relacionados con la pagina y
//tambien reacciona a todos los eventos de la pagina
//obtener elemento del HTML

let datos = document.getElementById("datos");
// let numero = "Valen";
//Variable Global
// let nombretres = "pepe";

//Funcion
const nombreUsuario = () => {
  //Let Local
  let nombre = prompt("Ingresa tu nombre");

  // let nombredos = "Valen";
  //  nombredos = "Mary";

  alert(" Tu nombre es: " + nombre);

  //  console.log(nombretres);

  // numero = "Mary";
  // console.log(numero);
};

//Funcion vacia
//Eventos (ONCLICK DESDE JAVASCRIPT)
datos.onclick = function () {
  nombreUsuario();
};
