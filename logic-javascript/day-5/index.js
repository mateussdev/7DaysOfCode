let fruits = [];
let dairyProducts = [];
let candy = [];
let frozen = [];

const food = document.querySelector("#food");
const category = document.querySelector("#category");

const divShoppingList = document.querySelector("#divShoppingList");
divShoppingList.style.display = "none";

function addNewFood() {
  if (category.value === "fruits") {
    fruits.push(food.value);
  } else if (category.value === "dairyProducts") {
    dairyProducts.push(food.value);
  } else if (category.value === "candy") {
    candy.push(food.value);
  } else if (category.value === "frozen") {
    frozen.push(food.value);
  }

  divShoppingList.style.display = "block";
  divShoppingList.innerHTML = `
  <h2>Lista de Compras</h2>
  Frutas: ${fruits} <br> 
  Laticínios: ${dairyProducts} <br> 
  Doces: ${candy} <br> 
  Congelados: ${frozen}`;
}
