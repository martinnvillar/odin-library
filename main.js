const addBtn = document.querySelector('.addBtn');
const cancelBtn = document.querySelector('.cancel');
let myLibrary = [];

addBtn.addEventListener('click', function() {
    let newBook = document.querySelector('#new-book')
    newBook.style.display = 'block';
});

cancelBtn.addEventListener('click', function(){
    let cancelBook = document.querySelector('#new-book')
    newBook.style.display = 'none';
});

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
};



