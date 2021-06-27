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





// Para la segunda entrega de proyecto final

const clickButton = document.querySelectorAll(".addToCart")
// console.log(clickButton);

// Variable declarada para el carrito, donde después se van a pushear los items
let carrito = [];

// Variable para que se genere el cambio en el DOM
let tbody = document.querySelector(".tbody")

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
  alert("Su producto " + itemTitle + " con un valor de " + itemPrice + " ha sido agregado satisfactoriamente a su carrito");


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

$(".addToCart").click(function(){
  $("img").fadeOut("fast", function(){
    $("img").fadeIn("slow");
  });
})
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