let myLibrary = [];

class Book {
    constructor(title, author, pages, beenRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.beenRead = beenRead;
    }
}

const newBookBtn = document.querySelector('button#newBook');
const form = document.querySelector('form');
const booklist = document.getElementById('booklist');

newBookBtn.onclick = function() {
    form.style.display = 'block';
}

form.onsubmit = function(event) {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;

    if (document.querySelector('input[name="read"]:checked').value == 'yes') {
        beenRead = true;
    } else {
        beenRead = false;
    }

    let newBook = new Book(title, author, pages, beenRead)
    myLibrary.push(newBook);

    form.reset();
    displayBooks();
}

function displayBooks() {
    booklist.innerHTML = '';

    for (i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.indexNumber = i;
        booklist.appendChild(card);

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove';
        removeBtn.textContent = 'x';
        card.appendChild(removeBtn);

        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        card.appendChild(cardHeader);

        const title = document.createElement('h1');
        cardHeader.appendChild(title);
        title.textContent = myLibrary[i].title;

        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';
        card.appendChild(cardContent);

        const author = document.createElement('p');
        cardContent.appendChild(author);
        author.innerHTML = `<svg style="width:24px;height:24px;" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
            </svg> ` + myLibrary[i].author;

        const pages = document.createElement('p');
        cardContent.appendChild(pages);
        pages.innerHTML = `<svg style="width:24px;height:24px;" viewBox="0 0 24 24">
            <path fill="currentColor" d="M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z" />
            </svg> ` + myLibrary[i].pages + ' pages';
        
        const read = document.createElement('p');
        read.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M16.75 22.16L14 19.16L15.16 18L16.75 19.59L20.34 16L21.5 17.41L16.75 22.16M6 22C4.89 22 4 21.1 4 20V4C4 2.89 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V13.34C19.37 13.12 18.7 13 18 13C14.69 13 12 15.69 12 19C12 20.09 12.29 21.12 12.8 22H6Z" />
            </svg> ` + 'Read? ';
        cardContent.appendChild(read);

        const toggle = document.createElement('label');
        toggle.className = 'switch';
        read.appendChild(toggle);

        const input = document.createElement('input');
        input.type = 'checkbox';
        toggle.appendChild(input);

        const span = document.createElement('span');
        span.className = 'slider round';
        toggle.appendChild(span);
        
        if (myLibrary[i].beenRead == true) {
            input.checked = true;
        } else {
            input.checked = false;
        }

        card.onmouseenter = function() {
            removeBtn.style.display = 'block';
        }

        card.onmouseleave = function() {
            removeBtn.style.display = 'none';
        }

        removeBtn.onclick = function() {
            myLibrary.splice(card.dataset.indexNumber, 1);
            displayBooks();
        }

        span.onclick = function() {
            myLibrary[card.dataset.indexNumber].beenRead = !myLibrary[card.dataset.indexNumber].beenRead;
        }
    }
}

const closeFormBtn = document.querySelector('button#closeForm');

closeFormBtn.onclick = function(event) {
    event.preventDefault();
    form.style.display = 'none';
}

// MUST DO:
// how to center content with long titles
// set up toggle switch to match beenRead property and be able to change property in array
// figure out problem with focus vs focus-visible on input fields

// BIG IDEAS:
// add a sort by option (a-z title/author, most recently added, # of pages)
// filter by read and not read
// animations for cards and form