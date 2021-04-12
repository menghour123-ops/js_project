// Hide Show Form
let btnAddForm = document.querySelector("#newBook");
btnAddForm.addEventListener('click', showForm);

let btnCloseForm = document.querySelector("#closeForm");
btnCloseForm.addEventListener('click', closeForm);

let form = document.querySelector("#myForm");

function showForm() {
  form.style.display = "block";
  container.style.display = "none";
  btnCloseForm.style.display = "block";
  btnAddForm.style.display = "none";

  title.value = "";
  author.value = "";
  page.value = "";
}

function closeForm() {
  form.style.display = "none";
  container.style.display = "block";
  btnCloseForm.style.display = "none";
  btnAddForm.style.display = "block";
}


// ---------------------------------------ADD New BOOK------------------------------------------------//

let title = document.querySelector("#formTitle");
let author = document.querySelector("#formAuthor");
let page = document.querySelector("#formPages");
let action = fillForm.formRead;

let container = document.querySelector(".container")

let add = document.querySelector("#formSubmit");
add.addEventListener('click', addCard);

function addCard(event) {
  event.preventDefault();

  let card = document.createElement('div');
  card.className = "card";
// Create element that have in card
  let h1 = document.createElement('h1');
  h1.textContent = title.value;
  let h2 = document.createElement('h2');
  h2.textContent = author.value;
  let p1 = document.createElement('p');
  p1.textContent = page.value;
  let p2 = document.createElement('p');
  p2.textContent = action.value;

  let removeBtn = document.createElement('button');
  removeBtn.className = "btn";
  removeBtn.textContent = "Remove";
// Add all inform from input into card
  card.appendChild(h1);
  card.appendChild(h2);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(removeBtn);
// Add card into container
  container.appendChild(card);


  form.style.display = "none";
  container.style.display = "block";
  btnCloseForm.style.display = "none";
  btnAddForm.style.display = "block";

}


// Remove card .
container.addEventListener('click', removeCard);
function removeCard(event) {
  let findClass = event.target.className;
  if (findClass === "btn") {
    let cards = event.target.parentElement;
    cards.remove();
  }
}


// Reset Btn 
let reset = document.querySelector("#resetBooks");
reset.addEventListener('click', resetAll);
function resetAll() {
  let allCard = document.querySelectorAll(".card");
  for (value of allCard) {
    value.remove();
  }
}