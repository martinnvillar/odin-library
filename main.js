const addBtn = document.querySelector('.addBtn');
const cancelBtn = document.querySelector('.cancel');
const bookDialog = document.querySelector('#book-dialog');
const confirmBook = document.querySelector('.confirm');
const cardsCont = document.querySelector('.cards-container');
let myLibrary = [];
 

addBtn.addEventListener('click', () => {
    bookDialog.showModal();
});

confirmBook.addEventListener('click', () => {
    addBookToLibrary();
    insertBook();
    console.log()
});

cancelBtn.addEventListener('click', (event) => {
    event.preventDefault();
    bookDialog.close();
})

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};

function addBookToLibrary() {
    const addTitle = document.querySelector('#title').value;
    const addAuthor = document.querySelector('#author').value;
    const numbOfPages = document.querySelector('#pages').value;
    const bookStatus = document.querySelector('#read').checked;
    const bookForm = document.querySelector('form');

    const book = new Book(addTitle, addAuthor, numbOfPages, bookStatus);

    if (addTitle !== '' & addAuthor !== '' & numbOfPages !== '') {
        myLibrary.push(book);
    } else {
        null
    };
    bookForm.reset();
}


function insertBook() {
    let bookCard = '';
    if (myLibrary) {
        myLibrary.forEach((book, index) =>
        bookCard += 
        `<div class="cards-container">
            <div class="book-card">
                <h2>${book.title}</h2>
                <h3>by ${book.author}</h3>
                <p>${book.pages} pages</p>
                <div class="card-btn">
                    <button class="read"><p></p></button>
                    <button class="delete-card"><img class="trash-ico" src="trash.svg" alt="trash-ico"></button>
                </div>
            </div>
        </div>`
        
        )};
        cardsCont.innerHTML = bookCard;
};








