let myLibrary = [{name: "The Hobbit", author: "J.R.R. Tolkien", pages: 295, read: 0}];
const display = document.querySelector(".card-container");

function Book(title, author, numPages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
}

function addBook() {
  document.querySelector(".form-container").style.display = "flex";
}

function addBookToLibrary(title, author, numPages, read) {
  // do stuff here
  const book = new Book(title, author, numPages, read);
  myLibrary.push(book);
}

function displayBooks() {
    for (i in myLibrary) {
        const card = document.createElement("div");
        card.classList.add('card-item');
        card.textContent = myLibrary[i].name;
        display.appendChild(card);
    }
}