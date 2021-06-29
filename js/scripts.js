// Función para crear los items

// function Articulo(nombre, precio){
//   this.nombre = nombre;
//   this.precio = precio;
// }
// //Objeto creado
// const cheesecake = new Articulo("Porcion de Cheesecake", 285);
// console.log(cheesecake);



//Evento del mouse cuando alguien haga click en "Agregar al carrito. CON ID FUNCIONA

// let agregarCarrito = document.getElementById("carrito");
// agregarCarrito.onclick = () => {console.log("Producto Agregado a su carrito (por ID)")};
// agregarCarrito.onmousemove = () => {console.log("COMPRAMEEEEE (ID)")};

// //Evento del mouse cuando alguien haga click en "Agregar al carrito. CON CLASS NO FUNCIONA
// let agregarCarrito1 = document.getElementsByClassName("carro");
// agregarCarrito1.onclick = () => {console.log("Producto agregado (por clase)")};
// agregarCarrito1.onmousemove = () => {console.log("COMPREMEEEEEEE (por clase)")};

// //Contador para el carrito. Probando como hacer
// let contador = document.getElementById("carro");
// contador.addEventListener("click", suma1)
// function suma1(){
//   alert("suma 1 producto")
// }

// Variable declarada para el carrito, donde después se van a pushear los items
let carrito = [];

//Función para crear los items
function Articulo(id, nombre, precio, imagen,){
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.imagen =imagen;
}
//Creando los objetos
const cheesecake = new Articulo(1,"Porcion de Cheesecake", 285, "Cheesecake.jpg");
// console.log(cheesecake);
const boxDesayuno = new Articulo(2,"Box de Desayuno o Merienda", 960, "DesayunoMerienda.jpg");
// console.log(boxDesayuno);
const muffinBanana = new Articulo(3,"Muffin de Banana Chocolate y Nuez", 180, "muffinBanana.jpg");
// console.log(muffinBanana);
const miniMagdalena = new Articulo(4,"Mini Magdalenas de Durazno y Almendras x3", 200, "MiniMagda.jpg");
// console.log(miniMagdalena);
const humita = new Articulo(5,"Humita de Pollo, Queso y Choclo", 570, "Humita.jpg");
// console.log(humita);
const tartine = new Articulo(6,"Tartine de Pollo al Curry", 610, "PolloCurry.png");
// console.log(tartine);
const malfattis = new Articulo(7,"Malfattis de Ricota y Espinaca", 620,"Malfattis.png");
// console.log(malfattis);
const ensaladaPollo = new Articulo(8,"Ensalada de Pollo Asado y Queso Azúl", 590,"EnsaladaPollo.jpg");
// console.log(ensaladaPollo);

//Que se detecten los "Agregar al carrito"
const clickButton = document.querySelectorAll(".addToCart")
// console.log(clickButton);

// Que se detecte el click en el agregar carrito
clickButton.forEach(btn => {
  btn.addEventListener("click", addToCarritoItem);
})


// Función que toma el nombre, precio e imagen del producto al momento de agregarlo al carrito
function addToCarritoItem (e){
  const button = e.target
  const item = button.closest(".card");
  const itemTitle = item.querySelector(".fw-bolder").textContent;
  const itemPrice = item.querySelector(".item-price").textContent;
  const itemImg = item.querySelector(".card-img-top").src;
    // console.log(button);
    // console.log(item)
    // console.log(itemTitle);
    // console.log(itemPrice);
    // console.log(itemImg);
  alert("Su producto " + itemTitle+ " con un valor de " + itemPrice + " ha sido agregado satisfactoriamente a su carrito");


  const newItem ={
    title: itemTitle,
    precio:itemPrice,
    img: itemImg,
    cantidad: 1
  }

  addItemCarrito(newItem)
}


function addItemCarrito(newItem){

// Con esto lo meto en el array y creo el objeto de ese item
  carrito.push(newItem);
  console.log(newItem);
}
//Animacion concatenada para que aparezca y desaparezca la imagen al momento de comprar algo
$(".addToCart").click(function(){
  $("img").fadeOut("fast", function(){
    $("img").fadeIn("slow");
  });
})
//
//Que aparezca un form al apretar el botón de confirmar carrito
$(".confirmacion").click(function(){
  // console.log("haz hecho click");
  $(".confirmacion").hide();
  $(".formulario").before('<form class="row g-3"><div class="col-md-6"><label for="inputEmail4" class="form-label">Email</label><input type="email" class="form-control" id="inputEmail4"></div><div class="col-md-6"><label for="nombreCompleto" class="form-label">Nombre Completo</label><input type="name" class="form-control"></div><div class="col-12"><label for="inputAddress" class="form-label">Domicilio</label><input type="text" class="form-control" id="inputAddress"></div></div><div class="col-md-4"><label for="inputState" class="form-label">Provincia</label><select id="inputState" class="form-select"><option selected>Buenos Aires</option><option>Capital Federal</option><option>Catamarca</option><option>Chaco</option><option>Chubut</option><option>Córdoba</option><option>Corrientes</option><option>Entre Ríos</option><option>Formosa</option><option>Jujuy</option><option>La Pampa</option><option>La Rioja</option><option>Mendoza</option><option>Misiones</option><option>Neuquén</option><option>Río Negro</option><option>Salta</option><option>San Juan</option><option>San Luis</option><option>Santa Cruz</option><option>Santa Fe</option><option>Santiago del Estero</option><option>Tierra del Fuego</option><option>Tucumán</option></select></div><div class="col-md-6"><label for="inputCity" class="form-label">Barrio</label><input type="text" class="form-control" id="inputCity"><div class="col-12"><br><button type="submit" class="btn btn-success">Confirmar Compra</button></div><br></form>');
})

// Variable para que se genere la tabla usando DOM
let tbody = document.querySelector(".tbody")

// //Probando Jquery

// $(function(){
//   $("#segundo").css({"background-color":"red"});

//   $("#tercero").mouseenter(function(){
//    $("#segundo").hide();
// });

// $("#tercero").mouseleave(function(){
//     $("#segundo").show();
// });

// $("#crear").click(function(){
//     $(".jquery").before('<h5 class="paraBorrar">Lo de abajo es un refrán</h2>');
// })
// $("#borrar").click(function(){
//     $(".paraBorrar").fadeOut();
// })


// });
// $("#pruebaFade").prepend('<h4 style"display:none" > ¡Probando el fadeIn!<h4>');
// $("#hide").click(function(){
//   $("h4").fadeOut("slow", function(){
// $("h4").slideDown(1000);
//   });
// }
// )

// $("#fade").click(function(){
//   $("h4").fadeIn();
//   })