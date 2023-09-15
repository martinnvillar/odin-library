const addBtn = document.querySelector('.addBtn');
const cancelBtn = document.querySelector('.cancel');
const bookDialog = document.querySelector('#book-dialog');
const addTitle = document.querySelector('#title');
const addAuthor = document.querySelector('#author');
const numbOfPages = document.querySelector('#pages');
const readBox = document.querySelector('#read');
const notReadBox = document.querySelector('#not-read');
 

addBtn.addEventListener('click', () => {
    bookDialog.showModal();
    document.body.classList.add('locked-scroll');
});

let myLibrary = [];

function Book (title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
};





