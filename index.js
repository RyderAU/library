let myLibrary = [];
const display = document.querySelector(".card-container");

function Book(title, author, numPages, read) {
  // the constructor...
  this.id = 0;
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
}

function displayForm() {
  document.querySelector(".form-container").style.display = "flex";
}

function addBookToLibrary(title, author, numPages, read) {
  const book = new Book(title, author, numPages, read);
  myLibrary.push(book);
  displayBooks();
  document.querySelector(".form-container").style.display = "none";
}

function displayBook(id, title, author, numPages, read) {
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
  // read button
  const cardTextItemFour = document.createElement("div");
  cardTextItemFour.classList.add('card-text-item');
  if (read) {
    cardTextItemFour.classList.add('card-text-item-read');
    cardTextItemFour.textContent = 'read';
  } else {
    cardTextItemFour.classList.add('card-text-item-not-read');
    cardTextItemFour.textContent = 'not read';
  }

  // change read status function
  cardTextItemFour.onclick = function() {
    for (let i = 0 ; i < myLibrary.length ; i++) {
      if (i == id) {
        myLibrary[i].read = !myLibrary[i].read;
      }
      displayBooks();
    }
  }

  // remove button
  const cardTextItemFive = document.createElement("div");
  cardTextItemFive.classList.add('card-text-item');
  cardTextItemFive.classList.add('card-text-item-remove');
  cardTextItemFive.textContent = `remove`;
  
  // remove function
  cardTextItemFive.onclick = function() {
    for (let i = 0 ; i < myLibrary.length ; i++) {
      if (i == id) {
        myLibrary.splice(i, 1);
      }
      displayBooks();
    }
  }

  card.appendChild(cardTextItemOne);
  card.appendChild(cardTextItemTwo);
  card.appendChild(cardTextItemThree);
  card.appendChild(cardTextItemFour);
  card.appendChild(cardTextItemFive);
  display.appendChild(card);
}

// go through myLibrary array and display books on DOM
function displayBooks() {
  // remove all current elements
  removeChildNodes(display);
  for (let i = 0 ; i < myLibrary.length ; i++) {
    myLibrary[i].id = i;
    displayBook(myLibrary[i].id, myLibrary[i].title, myLibrary[i].author, myLibrary[i].numPages, myLibrary[i].read);
  }
}

// remove an element's child elements
function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


window.onclick = function(e) {
  // close modal when clicking off
  if (e.target.className == "form-container") {
    document.querySelector(".form-container").style.display = "none";
  }
}