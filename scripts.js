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
    booklist.innerHTML = '';
    for (i = 0; i < myLibrary.length; i++) {
        const div = document.createElement('div');
        div.className = 'card';
        booklist.appendChild(div);
        const title = document.createElement('h1');
        div.appendChild(title);
        title.textContent = myLibrary[i].title;
        const author = document.createElement('p');
        div.appendChild(author);
        author.textContent = myLibrary[i].author;
        const pages = document.createElement('p');
        div.appendChild(pages);
        pages.textContent = myLibrary[i].pages + ' pages';
        const beenRead = document.createElement('p');
        div.appendChild(beenRead);
        beenRead.textContent = myLibrary[i].beenRead;
    }
}

const closeForm = document.querySelector('button#closeForm');

closeForm.onclick = function(event) {
    event.preventDefault();
    form.style.display = 'none';
}

// MUST DO:
// style card nicely, add a yes/no switch for beenRead
// figure out problem with focus vs focus-visible on input fields
// clear input fields on submit
// add an option to remove a book from grid

// BIG IDEAS:
// add a sort by option (a-z title/author, most recently added, # of pages)
// filter by read and not read
// animations for cards and form