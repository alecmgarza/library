let myLibrary = ['A', 'B', 'C'];

function Book(title, author, pages, beenRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.beenRead = beenRead
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

form.onsubmit = function(event) {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let beenRead = document.getElementById('beenRead').value;

    let newBook = new Book(title, author, pages, beenRead)
    myLibrary.push(newBook);
}

const closeForm = document.querySelector('button#closeForm');

closeForm.onclick = function() {
    form.style.display = 'none';
}

displayBooks();

// figure out how to display array of objects using JSON.stringify
// how does that work with my for loop?
// figure out how to refresh display of objects when they are added or removed