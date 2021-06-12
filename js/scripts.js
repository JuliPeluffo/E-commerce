//Función para crear los items

// function Articulo(nombre, precio){
//   this.nombre = nombre;
//   this.precio = precio;
// }
// //Objeto creado
// const cheesecake = new Articulo("Porcion de Cheesecake", 285);
// console.log(cheesecake);

//Tomar la información de un articulo a través del HTML
// let torta = document.getElementsByClassName("torta");
// console.log(torta[0].innerHTML);
// console.log(torta[1].innerHTML);



//Modificar el nombre o precio del artículo

//Borrar desde JS los nodos con el precio y nombre del articulo
let torta = document.getElementsByClassName("torta");
torta[0].parentNode.removeChild(torta[0]);
torta[0].parentNode.removeChild(torta[0]);

//Crear un nodo nuevo desde JS con un nombre y precio para el articulo
let nuevoPrecio =document.createElement("div");
nuevoPrecio.innerHTML = "$300";
document.section.appendChild(nuevoPrecio); //No se como hacerlo aparecer en el div class torta.

// document.body.appendChild(nuevoPrecio) // Funciona y aparece en el body, pero me lo agrega al final (detrás del footer) y no es lo que quiero jaja


