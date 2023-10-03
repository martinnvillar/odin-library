const addBtn = document.querySelector('.addBtn');
const cancelBtn = document.querySelector('.cancel');
const bookDialog = document.querySelector('#book-dialog');
const confirmBook = document.querySelector('.confirm');
const cardsCont = document.querySelector('.cards-container');
const addTitle = bookDialog.querySelector('#title');
const addAuthor = bookDialog.querySelector('#author');
const numbOfPages = bookDialog.querySelector('#pages');
const bookStatus = bookDialog.querySelector('#read');
const bookForm = bookDialog.querySelector('form');
const statusBtn = document.querySelector('#change-status');

let myLibrary = [];
 

addBtn.addEventListener('click', () => {
    bookDialog.showModal();
});

confirmBook.addEventListener('click', () => {
    if(addTitle.value == '' || addAuthor.value == '' || numbOfPages.value == '') {
        alert('All the inputs are required!');
        return null;
    } else {
        myLibrary.push(new Book(addTitle.value, addAuthor.value, numbOfPages.value,bookStatus.checked));
        insertBook();
        bookDialog.close();
        bookForm.reset();
    }
});

cancelBtn.addEventListener('click', (event) => {
    event.preventDefault();
    bookDialog.close();
    bookForm.reset();
})



function Book(title, author, pages, status) {
    this.id = Date.now();
    this.title = title;
    this.author = author;
    this.pages = pages;
    if(status) {
        this.status = 'Read';
    } else {
        this.status = 'Not Read';
    }
};

function insertBook() {
    let bookCard = '';
    
    myLibrary.forEach((book, index) =>
        bookCard += 
        `<div class="book-card">
                <h2>${book.title}</h2>
                <h3>by ${book.author}</h3>
                <p>${book.pages} pages</p>
                <div class="card-btn">
                    <button class="read-btn" onclick=""><p>${book.status}</p></button>
                    <button class="delete-card" onclick="removeBook(${book.id})"><img class="trash-ico" src="trash.svg" alt="trash-ico"></button>
                </div>
            </div>`
            
            )
            cardsCont.innerHTML = bookCard;
};

function removeBook(bookId) {
    myLibrary = myLibrary.filter(book => book.id !== bookId);
    insertBook();
    console.log(`${bookId} Successfully deleted!`);
};