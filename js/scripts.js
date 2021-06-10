//Función para crear los items

function Articulo(nombre, precio){
  this.nombre = nombre;
  this.precio = precio;
}
//Objeto creado
const cheesecake = new Articulo("Porcion de Cheesecake", 285);
console.log(cheesecake);

//Tomar la información de un articulo a través del HTML
let torta = document.getElementsByClassName("torta");
console.log(torta[0].innerHTML);
console.log(torta[1].innerHTML);


//Modificar el nombre o precio del artículo


