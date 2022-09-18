let myLibrary = [];
const display = document.querySelector(".card-container");

function Book(title, author, numPages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
}

function displayForm() {
  document.querySelector(".form-container").style.display = "flex";
}

function addBookToLibrary(title, author, numPages, read) {
  // do stuff here
  const book = new Book(title, author, numPages, read);
  myLibrary.push(book);
  console.log(read);
  displayBook(book.title, book.author, book.numPages, book.read);
  document.querySelector(".form-container").style.display = "none";
  console.log(myLibrary);
}

function displayBook(title, author, numPages, read) {
  console.log('adding one')
  const card = document.createElement("div");
  card.classList.add('card-item');
  // title
  const cardTextItemOne = document.createElement("div");
  cardTextItemOne.classList.add('card-text-item');
  cardTextItemOne.classList.add('card-text-item-title');
  cardTextItemOne.textContent = `'${title}'`;
  // author
  const cardTextItemTwo = document.createElement("div");
  cardTextItemTwo.classList.add('card-text-item');
  cardTextItemTwo.textContent = author;
  // number of pages
  const cardTextItemThree = document.createElement("div");
  cardTextItemThree.classList.add('card-text-item');
  cardTextItemThree.textContent = `${numPages} pages`;
  // read status
  console.log(read)
  const cardTextItemFour = document.createElement("div");
  cardTextItemFour.classList.add('card-text-item');
  if (read) {
    cardTextItemFour.classList.add('card-text-item-read');
    cardTextItemFour.textContent = 'read';
  } else {
    cardTextItemFour.classList.add('card-text-item-not-read');
    cardTextItemFour.textContent = 'not read';
  }
  card.appendChild(cardTextItemOne);
  card.appendChild(cardTextItemTwo);
  card.appendChild(cardTextItemThree);
  card.appendChild(cardTextItemFour);
  display.appendChild(card);
}

window.onclick = function(e) {
  // close modal when clicking off
  if (e.target.className == "form-container") {
    document.querySelector(".form-container").style.display = "none";
  }
}