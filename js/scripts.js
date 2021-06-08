//Que se reconozca cual es el botón que se clickea (agregar carrito)
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});
//Click en agregar al carrito, y toma el nombre, precio e imagen del item.
function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest(".item")
    console.log("addToCartClicked -> item" , item)

    const itemTitle = item.querySelector("item-title").textContent;
    const itemPrice = item.querySelector("item-price").texContent;
    const itemImage = item.querySelector("item-image").src;

    console.log("addToCartClicked -> itemTitle" , itemTitle, itemPrice, itemImage);
}
