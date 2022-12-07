let myLibrary = ['A', 'B', 'C'];

function Book(title, author, pages, beenRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.beenRead = beenRead
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent = myLibrary[i];
    }
}

const btn = document.querySelector('button');
const form = document.querySelector('form');

btn.onclick = function() {
    form.style.display = 'block';
}

const closeForm = document.querySelector('button#closeForm');

closeForm.onclick = function() {
    form.style.display = 'none';
}

displayBooks();