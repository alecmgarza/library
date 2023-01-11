let myLibrary = [];

function Book(title, author, pages, beenRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.beenRead = beenRead
}

const btn = document.querySelector('button');
const form = document.querySelector('form');
const booklist = document.getElementById('booklist');
const div = document.createElement('div');
booklist.appendChild(div);

btn.onclick = function() {
    form.style.display = 'block';
}

form.onsubmit = function(event) {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let beenRead = document.getElementById('beenRead').value;

    let newBook = new Book(title, author, pages, beenRead)
    myLibrary.push(newBook);

    displayBooks();
}

function displayBooks() {
        div.textContent = JSON.stringify(myLibrary, null, 4);
}

const closeForm = document.querySelector('button#closeForm');

closeForm.onclick = function(event) {
    event.preventDefault();
    form.style.display = 'none';
}

// successfully display updated array, now need to create cards with book info