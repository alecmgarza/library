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
    for (i = 0; i < myLibrary.length; i++) {
        const div = document.createElement('div');
        div.className = 'card';
        booklist.appendChild(div);
        const title = document.createElement('h1');
        div.appendChild(title);
        title.textContent = myLibrary[i].title;
        const author = document.createElement('div');
        div.appendChild(author);
        author.textContent = myLibrary[i].author;
        const pages = document.createElement('div');
        div.appendChild(pages);
        pages.textContent = myLibrary[i].pages + ' pages';
        const beenRead = document.createElement('div');
        div.appendChild(beenRead);
        beenRead.textContent = myLibrary[i].beenRead;
    }
}

const closeForm = document.querySelector('button#closeForm');

closeForm.onclick = function(event) {
    event.preventDefault();
    form.style.display = 'none';
}

// successfully display updated array, now need to create cards with book info